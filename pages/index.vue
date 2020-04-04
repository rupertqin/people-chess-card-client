<template>
  <div>
    <div class="home_content">
      <!-- 广告图位置 START -->

      <div class="index_banner_box">
        <!-- scroll_banner start -->

        <div class="index_scroll_banner swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="newsdetail_t09.html"><img src="img/temporary/index_bigbanner_1.jpg"></a>
            </div>
            <div class="swiper-slide">
              <a href="newsdetail_dongtai_a_09.html"><img src="img/temporary/index_bigbanner_2.jpg"></a>
            </div>
          </div>
          <div class="swiper-pagination" />
          <span class="swiper-button-prev" />
          <span class="swiper-button-next" />
        </div>

        <div class="index_banner_box_r">
          <a href="newsdetail_a01.html">
            <img src="img/temporary/index_sbanner_1.jpg" alt="">
          </a>
          <a href="newsdetail_dongtai_a_08.html">
            <img src="img/temporary/index_sbanner_3.jpg" alt="">
          </a>
        </div>
      </div>


      <!-- 大广告图 OVER -->


      <div class="ml-20 clearfix" />

      <div class="block_contm">
        <!-- 左侧块 START -->
        <div class="block_left">
          <!-- 产业动态 START -->
          <div class="home_news">
            <div class="block_title">
              <div class="block_title_name">
                动态资讯
              </div>
            </div>

            <div class=" clearfix" />

            <div class="s_block_title">
              <div class="s_block_title_name">
                热点资讯
              </div>
              <div class="s_block_title_more">
                <a href="/news">MORE</a>
              </div>
            </div>

            <div class="clearfix" />

            <div class="news_cont">
              <NLink v-for="(article, i) in news.热点资讯" :key="i" :to="`news/${article.id}`">
                <div class="news_cont_name">
                  {{ article.标题 }}
                </div>
                <div class="news_cont_time">
                  {{ article.updated_at.slice(0,10) }}
                </div>
              </NLink>
            </div>

            <div class="s_block_title">
              <div class="s_block_title_name">
                产业动态
              </div>
              <div class="s_block_title_more">
                <a href="/news">MORE</a>
              </div>
            </div>

            <div class="clearfix" />

            <div class="news_cont">
              <NLink v-for="(article, i) in news.产业动态" :key="i" :to="`news/${article.id}`">
                <div class="news_cont_name">
                  {{ article.标题 }}
                </div>
                <div class="news_cont_time">
                  {{ article.updated_at.slice(0,10) }}
                </div>
              </NLink>
            </div>
          </div>
          <div class="clearfix" />


          <!-- 产业动态 OVER -->


          <!-- 智力竞技 START -->
          <div class="home_news">
            <div class="block_title">
              <div class="block_title_name">
                智力竞技
              </div>
            </div>

            <div class=" clearfix" />

            <div class="s_block_title">
              <div class="s_block_title_name">
                行业新闻
              </div>
              <div class="s_block_title_more">
                <a href="/sportnews">MORE</a>
              </div>
            </div>

            <div class="clearfix" />

            <div class="news_cont">
              <NLink v-for="(article, i) in sportNews.行业新闻" :key="i" :to="`sportnews/${article.id}`">
                <div class="news_cont_name">
                  {{ article.标题 }}
                </div>
                <div class="news_cont_time">
                  {{ article.updated_at.slice(0,10) }}
                </div>
              </NLink>
            </div>


            <div class="s_block_title">
              <div class="s_block_title_name">
                人民智力竞技
              </div>
              <div class="s_block_title_more">
                <a href="sportnews">MORE</a>
              </div>
            </div>

            <div class="clearfix" />

            <div class="news_cont">
              <NLink v-for="(article, i) in sportNews.人民智力竞技" :key="i" :to="`sportnews/${article.id}`">
                <div class="news_cont_name">
                  {{ article.标题 }}
                </div>
                <div class="news_cont_time">
                  {{ article.updated_at.slice(0,10) }}
                </div>
              </NLink>
            </div>
          </div>
          <div class="clearfix" />


        <!-- 智力竞技 OVER -->
        </div>
        <!-- 左侧块 OVER -->


        <!-- 右侧块 START -->
        <div class="block_right">
          <!-- 游戏板块 START -->
          <div class="game">
            <div class="block_title">
              <div class="block_title_name">
                产品矩阵
              </div>
              <div class="block_title_more">
                <a href="/products">MORE</a>
              </div>
            </div>
            <div class="clearfix" />
            <div class="game_box">
              <a v-for="(product, i) in products" :key="i" href="/products">
                <div class="game_box_l">
                  <img :src="FILE_URL + product.logo[0].url" alt="">
                </div>
                <div class="game_box_r">
                  <div class="game_box_name">{{ product.名称 }}</div>
                  <div class="game_box_desc">{{ product.描述 }}</div>
                </div>
              </a>
            </div>
          </div>
          <!-- 游戏板块 OVER -->
          <div class="clearfix" />


          <div class="index_right_enter">
            <a href="/article-column?type=fakes">
              <img src="img/index_enter_01.jpg" alt="">
              <span>打假专栏</span>
            </a>
            <a href="/article-column?type=pvprules">
              <img src="img/index_enter_03.jpg" alt="">
              <span>智力竞技标准规范</span>
            </a>
            <a href="/article-column?type=cests">
              <img src="img/index_enter_04.jpg" alt="">
              <span>CEST专题栏</span>
            </a>
          </div>
        </div>
        <!-- 右侧块 OVER -->
        <div class="clearfix" />
      </div>
    </div>

    <script type="text/javascript" src="js/jquery-3.4.1.min.js" />
    <script type="text/javascript" src="js/bootstrap.min.js" />
    <script type="text/javascript" src="js/swiper.min.js" />
    <script>
      var mySwiper = new Swiper ('.swiper-container', {
      loop: true, // 循环模式选项
      autoplay: true,
      delay: 4000,
      effect : 'slide',

      // 如果需要分页器
      pagination: {
      el: '.swiper-pagination',
      },

      // 如果需要前进后退按钮
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      },

      // 如果需要滚动条
      scrollbar: {
      el: '.swiper-scrollbar',
      },


      })
    </script>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import groupBy from 'lodash/groupBy';
import { getNews, getSportNews, getProducts } from '@/api/article';

@Component
export default class Index extends Vue {
  FILE_URL = process.env.FILE_URL

  async asyncData() {
    let [news, sportNews, products] = await Promise.all([getNews(), getSportNews(), getProducts()]);
    if (news.error) return {};
    news = groupBy(news, '类型');
    sportNews = groupBy(sportNews, '类型');
    return {
      news,
      sportNews,
      products: products.添加产品,
    };
  }
}
</script>
