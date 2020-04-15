<template>
  <div>
    <div class="nav_s_list">
      <div class="nav_s_l">
        <a href="/">首页</a> >> <a href="/sportnews">智力竞技</a>
      </div>
      <div class="nav_s_r">
        <nuxt-link to="/sportnews?type=人民智力竞技">
          人民智力竞技
        </nuxt-link>
        <nuxt-link to="/sportnews?type=行业新闻">
          行业新闻
        </nuxt-link>
      </div>
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
          :to="`/sportnews/${article.id}`"
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

@Component({
  watchQuery: true,
})
export default class Index extends Vue {
  async asyncData({ query }) {
    const newsList = await getSportNews(query.type);
    return {
      newsList,
    };
  }
}
</script>

