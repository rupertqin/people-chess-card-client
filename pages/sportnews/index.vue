<template>
  <div>
    <div class="nav_s">
      <a href="index.html">人民网</a> >> <a href="/sportnews">智力竞技</a>
    </div>
    <div class="newslist">
      <div class="block_title">
        <div class="block_title_name">
          智力竞技
        </div>
      </div>
      <div class="clearfix" />
      <div class="newslist_box">
        <NLink
          v-for="(article, i) in newsList"
          :key="i"
          :to="`/news/${article.id}`"
          >
          <div class="news_name">
            <span>[{{ article.类型 }}]</span>{{ article.标题 }}
          </div>
          <div class="news_time">
            {{ article.updated_at.slice(0,10) }}
          </div>
        </NLink>
      </div>
      <div class="clearfix" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { getSportNews } from '@/api/article';

@Component
export default class Index extends Vue {
  async asyncData() {
    const newsList = await getSportNews();
    return {
      newsList,
    };
  }
}
</script>

