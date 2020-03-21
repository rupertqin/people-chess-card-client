/* eslint-disable no-console */
import fs from 'fs';
import os from 'os';
import dotenv from 'dotenv';

// 设置 env
dotenv.config();
const { SENTRY_DSN, SENTRY_ENVIRONMENT, BROWSER_BASE_URL, FILE_URL, BASE_URL } = process.env;

const defaultEnv = dotenv.parse(fs.readFileSync('.env.default'));
for (const k in defaultEnv) {
  if (!process.env[k]) {
    process.env[k] = defaultEnv[k];
  }
}

const {
  MOCK, MOCK_SERVER_URL, NODE_ENV,
  AXIOS_TIMEOUT, FONT_PROJECCT_ID, SERVER_PORT, AXIOS_LOG,
} = process.env;
const BASE_HOST = MOCK ? MOCK_SERVER_URL : BASE_URL;
const BROWSER_BASE_HOST = MOCK ? MOCK_SERVER_URL : BROWSER_BASE_URL;
const baseURL = `${BASE_HOST}/api/xz/mg`;
const browserBaseURL = `${BROWSER_BASE_HOST}/api/xz/mg`;
console.log(`BROWSER_BASE_HOST: ${BROWSER_BASE_HOST}`);

// 开发环境不加载这些
const scripts: any = NODE_ENV === 'development' ? [] : [{
  src    : 'https://cdn.bootcss.com/babel-polyfill/7.6.0/polyfill.js',
  charset: 'utf-8',
  type   : 'text/javascript',
  async  : true,
}];

scripts.push(...[{
  src    : `https://at.alicdn.com/t/${FONT_PROJECCT_ID}.js`,
  charset: 'utf-8',
}]);

export default {
  // mode: 'spa',

  /*
  ** Headers of the  page
  */
  head: {
    title: '薪智-薪酬报告_调研_薪酬体系_调薪_薪酬绩效_薪酬分析',
    meta : [{
      charset: 'utf-8',
    },
    {
      name   : 'keywords',
      content: '薪智,薪酬报告,薪酬体系,调薪,薪酬绩效,薪酬分析',
    },
    {
      'http-equiv': 'X-UA-Compatible',
      content     : 'IE=Edge',
    },
    {
      name   : 'viewport',
      id     : 'viewport',
      content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no',
    },
    {
      hid    : 'description',
      name   : 'description',
      content: '[薪智]率先将人工智能、大数据应用在薪酬管理领域。聚焦于薪酬报告、薪酬分析、薪酬体系设计、人力资本效能。提供“数据+工具+智能分析”一体化解决方案。',
    }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: `https://at.alicdn.com/t/${FONT_PROJECCT_ID}.css` }
    ],
    script: scripts,
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css    : [
    {
      src : '@/assets/css/common.less',
      lang: 'less',
    },
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/axios',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxt/typescript-build',
    ['@nuxtjs/dotenv', { systemvars: true }]
  ],
  dotenv: {
    /* module options */
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/sentry'
  ],

  /**
   * sentry
   */
  sentry: {
    dsn   : SENTRY_DSN,
    config: {
      environment: SENTRY_ENVIRONMENT || os.hostname(),
    },
  },

  /*
  ** serverMiddleware
  */
  serverMiddleware: [
    { path: '/ping', handler: '@/serverMiddleware/ping.ts' }
  ],

  /*
  ** Nuxt.js router
  */
  router: {
    middleware: [],
  },

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL,
    browserBaseURL,
    debug  : AXIOS_LOG === 'true',
    headers: {
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  },

  /*
  ** env
  */
  env: {
    baseURL,
    browserBaseURL,
    BASE_HOST,
    BROWSER_BASE_HOST,
    FILE_URL,
    AXIOS_TIMEOUT: Number(AXIOS_TIMEOUT),
    ENV          : SENTRY_ENVIRONMENT,
  },

  vue: {
    config: {
      productionTip: false,
      devtools     : true,
      performance  : true,
    },
  },

  /**
   * Server
   */
  server: {
    port  : SERVER_PORT, // default: 3000
    host  : '0.0.0.0', // default: localhost,
    timing: {
      total: true,
    },
  },

  /**
   * Build configuration
   */
  build: {
    publicPath: '/ws-web-datacenter/',
    postcss   : {
      autoprefixer: {
        browsers: ['last 3 versions'],
      },
    },
    extend(config, _ctx) {
      Object.assign(config.module.rules[5].oneOf[0].use[3].options, {
        javascriptEnabled: true,
        modifyVars       : {
          hack: `true; @import "~assets/css/variable.less";`,
        },
      });
    },
  },
};