<template>
  <div>
    <div class="nav_s">
      <a href="/">人民网</a> >> <a href="/sportnews">智力竞技</a>
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
import { getOneSportNews } from '@/api/article';
import { markdown, share } from '@/utils';

@Component({
  validate({ params }) {
    const testNumber = /^[0-9]{1,10}$/;
    return testNumber.test(params.id);
  },
})
export default class Index extends Vue {
  async asyncData({ params }) {
    const [data] = await Promise.all([
      getOneSportNews(params.id)
    ]);
    data.内容 = markdown(data.内容);
    return {
      data,
    };
  }
  mounted() {
    share(this.$data.data.标题, this.$data.data.内容);
  }
}
</script>

