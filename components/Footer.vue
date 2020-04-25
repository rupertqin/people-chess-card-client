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

    <!-- <div class="footer_plink" v-html="footerInfo" /> -->
    <div class="footer_plink">
      <a href="http://sq.ccm.gov.cn/ccnt/sczr/service/business/emark/toDetail/F0B2F3E8DAA74C5AA4716C39BAFCD815" target="_self"><img src="http://www.008.net/theme/blue/images/index/article.png"></a>文网游备字[2013]C-CBG009号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ICP证：沪B2-20140029&nbsp;&nbsp;
      <a target="_blank" style="text-decoration:none;" href="http://www.beian.miit.gov.cn">信息产业部备案编号：沪ICP备12036675号</a>
      <a target="_blank" style="text-decoration:none;" href="http://www.tlgame.net/common/images/xukezheng.jpg">沪网文[2017]1086-010号</a>
      <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502005953"><img src="http://img1.008.net/images/gongan.png">沪公网安备 31011502005953号</a>
      <a href="http://sq.ccm.gov.cn:80/ccnt/sczr/service/business/emark/gameNetTag/4028c08b560ca7100156539548fc1bc6" target="_self">
        <img src="http://www.008.net/theme/blue/images/index/dizhi.png">
      </a>
    </div>
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
