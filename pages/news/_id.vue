<template>
  <div>
    <div class="nav_s">
      <a href="http://www.people.com.cn">人民网</a> >> <a href="/">人民棋牌</a> >> <a href="/news">动态资讯</a>
    </div>

    <div class="newsdetail">
      <div class="newsdetail_box">
        <div class="newsdetail_title">
          {{ data.标题 }}
          <span>{{ data.updated_at | YYYYMMDD }}</span>
        </div>
        <div class="newsdetail_cont" v-html="data.内容" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { getOneNews, genSign } from '@/api/article';
import { markdown, getChinese } from '@/utils';
import WechatJSSDK from 'wechat-jssdk/dist/client.umd';

@Component({
  validate({ params }) {
    const testNumber = /^[0-9]{1,10}$/;
    return testNumber.test(params.id);
  },
})
export default class Index extends Vue {
  async asyncData({ params, req }) {
    const url = process.browser ? location.href : process.env.ORIGIN + req.url
    console.log('==== url', url)
    const [data, sign] = await Promise.all([
      getOneNews(params.id),
      genSign(url)
    ]);
    data.内容 = markdown(data.内容);
    return {
      data,
      sign: sign.result,
    };
  }

  async mounted() {
    const self= this;
    console.log('======', this.$data.sign)
    console.log('===== data：', self.$data)
    const wechatObj = new WechatJSSDK({
      ...this.$data.sign,
      debug: process.env.NODE_ENV === 'development',
    })
    wechatObj.initialize()
      .then(w => {
        //set up your share info, "w" is the same instance as "wechatObj"
        const desc = getChinese(self.$data.data.内容).slice(0, 20) + '... --人民棋牌 --人民网';
        wechatObj.shareOnChat({
          desc,
          type: 'link',
          title: self.$data.data.标题,
          link: location.href,
          imgUrl: 'https://people78.cn/img/logo.png',
          success: function (){},
          cancel: function (){}
        });
        //customize share on timeline info
        //sugar method
        wechatObj.shareOnMoment({
          desc,
          type: 'link',
          title: self.$data.data.标题,
          link: location.href,
          imgUrl: 'https://people78.cn/img/logo.png',
        });
      })
      .catch(err => {
        console.error('===== error', err);
      });
    // window.wx.ready(function() {

    // }
  }
}
</script>

