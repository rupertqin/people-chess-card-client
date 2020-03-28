<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Getter } from 'nuxt-property-decorator';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';


@Component({
  components: {
    Footer, Header,
  }
})
export default class LayoutDefault extends Vue {
}
</script>

<style lang="less" scoped>
</style>
