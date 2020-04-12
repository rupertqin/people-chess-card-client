<template>
  <div>
    <div class="nav_s">
      <a href="index.html">人民网</a> >> <a :href="`/article-column?type=${type}`">{{ name }}</a> >> 新闻详情
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
import { getOneFake, getOnePvprule, getOneCest } from '@/api/article';
import { markdown } from '@/utils';

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

function getAPIFn(type) {
  if (type === 'fakes') {
    return getOneFake;
  }
  if (type === 'pvprules') {
    return getOnePvprule;
  }
  return getOneCest;
}

@Component({
  validate({ params }) {
    const testNumber = /^[0-9]{1,10}$/;
    return testNumber.test(params.id);
  },
})
export default class Index extends Vue {
  async asyncData({ params, route }) {
    const { type, name } = getType(route.path);

    const data = await getAPIFn(type)(params.id);
    data.内容 = markdown(data.内容);
    return { data, type, name };
  }
}
</script>

