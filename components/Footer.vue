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
      人 民 智 力 竞 技 版 权 所 有，未 经 书 面 授 权 禁 止 使 用<br>
      Copyright © 2014 by www.people78.cn All Rights Reserved.
    </div>

    <div class="footer_plink" v-html="footerInfo" />
  </footer>
</template>


<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { getFriendlinks, getFooter } from '@/api/article';
import { markdown } from '@/utils';

@Component
export default class Footer extends Vue {
  FILE_URL = process.env.FILE_URL
  friendlinks = []
  footerInfo = ''

  async created() {
    const [resFl, resFooter] = await Promise.all([getFriendlinks(), getFooter()]);
    if (resFl.error) return {};
    this.friendlinks = resFl.link;
    this.footerInfo = markdown(resFooter.info);
  }
}
</script>
