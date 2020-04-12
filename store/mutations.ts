export default {
  setError(state, obj: string) {
    state.error = obj;
  },
  removeError(state) {
    state.error = null;
  },

  // loading
  START_LOADING(state) {
    state.isLoading = true;
  },
  END_LOADING(state) {
    state.isLoading = false;
  },
  SET_SITE_INFO(state, obj) {
    state.siteInfo = obj;
  },
};
