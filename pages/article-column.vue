<template>
  <div>
    <div class="nav_s">
      <a href="index.html">人民网</a> >> <a :href="`/article-column?type=${type}`">{{ typeName }}</a>
    </div>
    <div class="newslist">
      <div class="block_title">
        <div class="block_title_name">
          {{ typeName }}
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
            {{ article.标题 }}
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
import { ColumnType, getColumns } from '@/api/article';

const typeMap = {
  fakes   : '打假专栏',
  cests   : 'CEST专题栏',
  pvprules: '智力竞技标准规范',
};
@Component({
  validate({ query }) {
    const type: ColumnType = query.type as ColumnType;
    return Boolean(typeMap[type]);
  },
})
export default class Index extends Vue {
  type: ColumnType = ColumnType.FAKE

  get typeName() {
    return typeMap[this.type];
  }

  created() {
    this.type = this.$route.query.type as ColumnType;
  }

  async asyncData({ query }) {
    const type: ColumnType = query.type as ColumnType;
    const newsList = await getColumns(type);
    return {
      newsList,
    };
  }
}
</script>

