/**
 * { $auth, $axios, app, base: '/', env: {BASE_URL}, error: Function,
 * from, next, nuxtState, params, payload, query, redirect, route, store }
 */
export default async ({ store, req, res, query, redirect }) => {
  if (process.server) {
    await store.dispatch('getSiteInfo');
  }
};
