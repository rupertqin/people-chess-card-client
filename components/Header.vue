<template>
  <div>
    <div class="topboxa">
      <div class="topbox_innera">
        <img src="img/top_logo.jpg" alt="">
        <img v-if="!data.下架" class="topbox_slogan" :src="headerbanner" alt="">
      </div>
    </div>

    <nav class="topnava">
      <ul>
        <li><a class="active" href="/">首页</a></li>
        <li><a href="/news">动态资讯</a></li>
        <li><a href="/sportnews">智力竞技</a></li>
        <li><a href="/products">产品矩阵</a></li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { getHeaderBanner } from '@/api/article';

@Component
export default class Header extends Vue {
  FILE_URL = process.env.FILE_URL
  data = {
    图片: {
      url: '',
    },
    下架: true,
  }

  get headerbanner() {
    return this.FILE_URL + this.data.图片.url;
  }

  async created() {
    const result = await getHeaderBanner();
    if (result.error) return {};
    this.data = result;
  }
}
</script>
