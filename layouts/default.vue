<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import { getSiteinfo } from '@/api/article';


@Component({
  components: {
    Footer, Header,
  },
  head() {
    return {
      title: this.info.title,
      meta : [
        { hid: 'keyword', name: 'keyword', content: this.info.keyword },
        { hid: 'description', name: 'description', content: this.info.description }
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
