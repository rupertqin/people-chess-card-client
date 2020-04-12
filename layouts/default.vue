<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import * as fs from 'fs';
import { Component, Vue } from 'nuxt-property-decorator';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import { getSiteinfo } from '@/api/article';


@Component({
  components: {
    Footer, Header,
  },
  head() {
    let siteInfo = {
      title      : '',
      keyword    : '',
      description: '',
    };
    if (process.server) {
      const str = fs.readFileSync('./data.json', 'utf8');
      siteInfo = JSON.parse(str);
    }
    return {
      title: siteInfo.title,
      meta : [
        { hid: 'keyword', name: 'keyword', content: siteInfo.keyword },
        { hid: 'description', name: 'description', content: siteInfo.description }
      ],
    };
  },
})
export default class LayoutDefault extends Vue {
  info = {}
  async created() {
    this.info = await getSiteinfo();
  }
}
</script>

<style lang="less" scoped>
</style>
