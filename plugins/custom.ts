import Vue from 'vue';
import * as filters from '@/utils';

export const myPlugin: any = {
  install(Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      // 逻辑...
    };

    // 2. 添加全局资源
    Vue.directive('is-active', {
      bind(el, binding, vnode, oldVnode) {
      },
    });

    // 3. 注入组件选项
    Vue.mixin({
      created() {
        // 逻辑...
      },
    });

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
      // 逻辑...
    };


    // 5. 过滤器
    for (const name in filters) {
      if (name) {
        Vue.filter(name, filters[name]);
      }
    }
  },
};

Vue.use(myPlugin, { name: 99999 });
