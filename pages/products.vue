<template>
  <div>
    <div class="nav_s">
      <a href="/">首页</a> >> 产品矩阵
    </div>

    <div class="products">
      <div class="products_box">
        <div v-for="(product, i) in data" :key="i" class="products_block">
          <div class="products_block_l">
            <img :src="FILE_URL + product.logo[0].url" alt="">
            <a v-if="product.下载链接" class="donwload" :href="product.下载链接">立即下载</a>
          </div>
          <div class="products_block_r">
            <span>{{ product.名称 }}</span>
            {{ product.描述 }}
          </div>
        </div>
      </div>

      <div class="clearfix" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { getProducts } from '@/api/article';

@Component
export default class Index extends Vue {
  FILE_URL = process.env.FILE_URL
  async asyncData() {
    const data = await getProducts();
    return {
      data: data.添加产品,
    };
  }
}
</script>
