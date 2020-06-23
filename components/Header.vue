<template>
  <div>
    <div class="topbox">
      <div class="topbox_inner">
        <img src="http://people78.cn/img/top_logo.jpg" alt="">
        <img v-if="!banner.下架" class="topbox_slogan" :src="headerbanner" alt="">
      </div>
    </div>

    <nav class="topnav">
      <ul>
        <li
          v-for="(link, i) in menu"
          :key="i"
          >
          <a :href="link.url" :class="{ active: link.url === currPath }">
            {{ link.title }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { getHeaderBanner, getMenu } from '@/api/article';

@Component
export default class Header extends Vue {
  FILE_URL = process.env.FILE_URL
  banner = {
    图片: {
      url: '',
    },
    下架: true,
  }

  currPath = ''

  menu = []

  get headerbanner() {
    return this.FILE_URL + this.banner.图片.url;
  }

  async created() {
    this.currPath = this.$route.path;

    const [resBanner, resMenu] = await Promise.all([getHeaderBanner(), getMenu()]);
    if (resBanner.error) return {};
    this.banner = resBanner;
    this.menu = resMenu.link;
  }
}
</script>
