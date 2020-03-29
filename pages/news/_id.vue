<template>
  <div>
    <div class="nav_s">
      <a href="index.html">人民网</a> >> <a href="newslist.html">{{ data.type }}</a> >> 新闻详情
    </div>

    <div class="newsdetail">
      <div class="newsdetail_box">
        <div class="newsdetail_title">
          {{ data.标题 }}
          <span>2017年01月07日</span>
        </div>
        <div class="newsdetail_cont">
          {{ data.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { getOneNews } from '@/api/article';

@Component({
  validate({ params }) {
    const testNumber = /^[0-9]{1,10}$/;
    return testNumber.test(params.id);
  },
})
export default class Index extends Vue {
  async asyncData({ params }) {
    const data = await getOneNews(params.id);
    return {
      data,
    };
  }
}
</script>

