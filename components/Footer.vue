<template>
  <footer>
    <div class="footer_flinks">
      <a href="https://www.microbeam.cn/" target="_blank">关于我们</a>
      友情链接:
      <a
        v-for="(link, i) in friendlinks"
        :key="i"
        :href="link.url"
        target="_blank"
        >{{ link.title }}</a>
    </div>
    <div class="footer_desc">
      {{ copyright.copyright1 }}<br>
      {{ copyright.copyrigh2 }}
    </div>

    <div class="footer_plink" v-html="footerInfo" />
  </footer>
</template>


<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { getFriendlinks, getFooter, getCopyright } from '@/api/article';
import { markdown } from '@/utils';

@Component
export default class Footer extends Vue {
  FILE_URL = process.env.FILE_URL
  friendlinks = []
  footerInfo = ''
  copyright = {}

  async created() {
    const [resFl, resFooter, resCopyright] = await Promise.all([getFriendlinks(), getFooter(), getCopyright()]);
    if (resFl.error) return {};
    this.friendlinks = resFl.link;
    this.copyright = resCopyright;
    this.footerInfo = markdown(resFooter.info);
  }
}
</script>
