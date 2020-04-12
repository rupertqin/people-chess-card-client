import * as fs from 'fs';
import { getSiteinfo } from '@/api/article';


export default {
  setError({ commit }, error) {
    commit('setError', error);
  },
  async getSiteInfo({ commit }) {
    const siteinfo = await getSiteinfo();
    commit('SET_SITE_INFO', siteinfo);
    if (process.server) {
      fs.writeFileSync('./data.json', JSON.stringify(siteinfo));
    }
    return siteinfo;
  },
};
