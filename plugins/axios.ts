/*
**  ajax 请求拦截器
**  { params } - PASSBY 为 true 不拦截错误
**  { params } - LOADING 为 false 不算loading
*/

import qs from 'qs';

let counter: number = 0;

interface Response {
  config: {
    adapter?: Function;
    url: string;
    method: string;
    baseURL: string;
    timeout: number;
    params: any;
    data: any;
  },
  data: {
    code: number;
    msg: string;
    result: any | object | Array<any>;
  },
  headers: {
    'content-length': string;
    'content-type': string;
  },
  request: {
  },
  status: number;
  statusText: string;
}

interface Result {
  error?: string;
  msg?: string;
  code?: number;
  result?: any;
}

function getUrlToekn() {
  if (!process.browser) return false;
  const search = location.search.replace('?', '');
  const query = qs.parse(search);
  if (query.access_token) {
    return query.access_token;
  }
  return false;
}

export default function ({ app, $axios, redirect, store, isDev }, inject) {
  $axios.defaults.timeout = process.env.AXIOS_TIMEOUT;

  // Request helpers ($get, $post, ...)
  for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
    $axios[`$${method}`] = function () {
      return this[method].apply(this, arguments)
        .then(res => {
          if (!res) {
            return { error: 'no response' };
          }
          if (res && res.data) {
            return res.data;
          } else {
            return { error: res.message || res.code };
          }
        })
        .catch(err => ({ error: err }));
    };
  }

  // 在加载plugin阶段把 axios 变为挂到全局
  global.$axios = {} as any;
  Object.assign(global.$axios, $axios);

  $axios.onRequest(config => {
    // console.log(`
    // Making request to: ${config.url}
    // params: ${JSON.stringify(config.params)}`);

    // BASE_HOST 与 BROWSER_BASE_URL 自动切换
    // 仅当生产模式时
    const {BASE_HOST} = process.env; // 不能用解构
    const {BROWSER_BASE_HOST} = process.env;
    if (process.browser && BASE_HOST !== BROWSER_BASE_HOST) {
      if (config.url.includes(BASE_HOST)) {
        config.url = config.url.replace(BASE_HOST, BROWSER_BASE_HOST);
      }
    }

    const urlAccessToken = getUrlToekn();
    const access_token = urlAccessToken || app.store.state.accessToken;
    if (!config.params) config.params = {};

    // 只有当 loading === 'false' 才不算 loading
    // 所以默认都是 loading
    if (config.params.LOADING !== false && process.browser) {
      counter++;
      store.commit('START_LOADING');
    }

    if (access_token) {
      config.params.access_token = access_token;
    }
  });

  $axios.onResponse((response: Response) => {
    // httpAdapter 说明是 node 的 http 请求，不等于httpAdapter 所以这是前端发起的
    if (response.config.params.loading !== 'false' && process.browser) {
      counter--;
      if (counter <= 0) store.commit('END_LOADING');
    }
    const result: Result = {};
    const { data: { code, msg, result: resultData }, config: { url }, status } = response;

    if (isDev) {
      const { url, method, params, data } = response.config;
    }

    if (code === -5) {
      if (process.browser) {
        // 未登录
        return logout(store);
      } else {
        store.dispatch('setError', { msg: 'error from axios dispatch', logout: true });
      }

      // PASSBY 为真不拦截错误
    } else if (![0, 2, 5].includes(code) && response.config.params.PASSBY !== true) {
      result.error = msg || '系统异常';
    }
    if (result.error) {
      console.log(`
      ::Error::=> ${msg} ::
      url: ${url},
      Response Code: ${code},
      Status: ${status},
      Response Data: ${resultData && JSON.stringify(resultData).slice(0, 500)},
      `);

      if (process.browser) {
      }
    }
  });

  $axios.onRequestError(err => {
    console.log(`RequestError :: ${JSON.stringify(err)}`);
  });

  $axios.onResponseError(err => {
    // store.dispatch('setError', { msg: 'error from axios dispatch', logout: true });
    console.log(`ResponseError :: ${JSON.stringify(err)}`);
  });

  $axios.onError(({ code, config, request, response, isAxiosError }: any) => {
    if (process.server && response.status === 403 && response.data.code === -5) {
      store.dispatch('setError', { msg: 'error from axios dispatch', logout: true });
    }
    // code: "ECONNABORTED"

    // loading
    if (config.params.loading !== 'false' && process.browser) {
      counter--;
      if (counter <= 0) store.commit('END_LOADING');
    }

    let status = null;
    if (response) {
      status = parseInt(response && response.status);
    }
    if (status < 400) return;

    // 未登录
    if (status === 403) {
      return logout(store);
    }

    if (process.browser) {
    } else {
      store.dispatch('setError', {
        status,
        url: config.url,
      });
    }

    if (isAxiosError) {
      store.dispatch('setError', { msg: 'error from axios dispatch' });
      return console.log('timeout: ECONNABORTED: url:', config.url);
    }
  });
}

async function logout(store: any) {
  await store.dispatch('user/logout');
  if (process.browser) {
    return location.href = '/login';
  }
}
