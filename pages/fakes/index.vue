<template>
  <div>
    <div class="nav_s">
      <a href="/">人民网</a> >> <a :href="`/${type}`">{{ name }}</a>
    </div>
    <div class="newslist">
      <div class="block_title">
        <div class="block_title_name">
          {{ name }}
        </div>
      </div>
      <div class="clearfix" />
      <div class="newslist_box">
        <NLink
          v-for="(article, i) in newsList"
          :key="i"
          :to="`/${type}/${article.id}`"
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

function getType(path) {
  let type, name;
  for (const key in typeMap) {
    if (path.includes(key)) {
      type = key;
      name = typeMap[key];
    }
  }
  return { type, name };
}

@Component({
})
export default class Index extends Vue {
  type: ColumnType = ColumnType.FAKE

  get typeName() {
    return typeMap[this.type];
  }

  async asyncData({ route }) {
    const { type, name } = getType(route.path);

    const newsList = await getColumns(type);
    return { newsList, type, name };
  }
}
</script>

