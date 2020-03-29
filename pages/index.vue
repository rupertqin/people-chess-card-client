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
                <a href="newslist.html">MORE</a>
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
                <a href="newslist.html">MORE</a>
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
                <a href="newslist_pvp.html">MORE</a>
              </div>
            </div>

            <div class="clearfix" />

            <div class="news_cont">
              <a href="newsdetail_pvp_a_02.html">
                <div class="news_cont_name">宏益杯棋协大师赛闭幕 杨宝森：希望越做越好</div>
                <div class="news_cont_time">2019-08-04</div>
              </a>

              <a href="newsdetail_pvp_a_03.html">
                <div class="news_cont_name">第四届星球杯全国少年儿童国跳棋王棋后赛落幕</div>
                <div class="news_cont_time">2019-08-04</div>
              </a>
              <a href="newsdetail_pvp_a_04.html">
                <div class="news_cont_name">亚布力迎接八方棋士 宏益杯继续执行精品路线</div>
                <div class="news_cont_time">2019-07-31</div>
              </a>
              <a href="newsdetail_pvp_a_05.html">
                <div class="news_cont_name">深圳福田象棋文化节之青少年国际邀请赛开幕</div>
                <div class="news_cont_time">2019-07-29</div>
              </a>

              <a href="newsdetail_pvp_a_07.html">
                <div class="news_cont_name">绍兴女子国象公开赛 李雪怡张岚琳双双获胜</div>
                <div class="news_cont_time">2019-07-13</div>
              </a>

              <a href="newsdetail_pvp_a_08.html">
                <div class="news_cont_name">女子公开赛举办超快棋副赛 突出娱乐意在推广</div>
                <div class="news_cont_time">2019-07-12</div>
              </a>

              <a href="newsdetail_pvp_a_09.html">
                <div class="news_cont_name">云南省定首届“招银杯”国际象棋邀请赛举行</div>
                <div class="news_cont_time">2019-07-8</div>
              </a>
            </div>


            <div class="s_block_title">
              <div class="s_block_title_name">
                人民智力竞技
              </div>
              <div class="s_block_title_more">
                <a href="newslist_pvp.html">MORE</a>
              </div>
            </div>

            <div class="clearfix" />

            <div class="news_cont">
              <a href="newsdetail_pvp_b_01.html">
                <div class="news_cont_name">2019CEST智力竞技板块岁末收官</div>
                <div class="news_cont_time">2019-12-30</div>
              </a>

              <a href="newsdetail_pvp_b_05.html">
                <div class="news_cont_name">第十二届中日韩文化产业论坛在韩国釜山举行</div>
                <div class="news_cont_time">2019-11-15</div>
              </a>

              <a href="newsdetail_pvp_b_02.html">
                <div class="news_cont_name">2019全国上网服务行业年会在安徽合肥举办</div>
                <div class="news_cont_time">2019-03-29</div>
              </a>

              <a href="newsdetail_pvp_b_03.html">
                <div class="news_cont_name">2018 CEST中国电子竞技娱乐大赛在安徽正式启动</div>
                <div class="news_cont_time">2018-09-03</div>
              </a>

              <a href="newsdetail_pvp_b_04.html">
                <div class="news_cont_name">微屏软件获CEST智力运动竞技比赛承办权 布局勾画智力竞技赛事蓝图</div>
                <div class="news_cont_time">2018-05-08</div>
              </a>
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
                <a href="products.html">MORE</a>
              </div>
            </div>
            <div class="clearfix" />
            <div class="game_box">
              <a href="products.html">
                <div class="game_box_l">
                  <img src="img/home_game_02.jpg" alt="">
                </div>
                <div class="game_box_r">
                  <div class="game_box_name">人民棋牌</div>
                  <div class="game_box_desc">在人民棋牌平台上推出的第一批在线游戏包括台球游戏及中国象棋。人民棋牌平台专注于PC在线棋牌游戏，游戏分类有：麻将游戏、牌类游戏、棋类游戏、休闲游戏。</div>
                </div>
              </a>

              <a href="products.html">
                <div class="game_box_l">
                  <img src="img/home_game_01.jpg" alt="">
                </div>
                <div class="game_box_r">
                  <div class="game_box_name">掌心游</div>
                  <div class="game_box_desc">随着智能手机的快速发展，过去由计算器执行的许多功能现在可以通过智能手机来实现，便携式智能手机 的小巧设计可以让人们随时随地上网玩在线游戏。</div>
                </div>
              </a>

              <a href="products.html">
                <div class="game_box_l">
                  <img src="img/home_game_03.jpg" alt="">
                </div>
                <div class="game_box_r">
                  <div class="game_box_name">掌心竞技</div>
                  <div class="game_box_desc">掌心竞技项目是一款以广受欢迎的棋牌游戏为载体、主打多种比赛竞技模式为核心的竞技类棋牌休闲游戏，让玩家以打斗地主游戏或麻将游戏的方式，进行玩家之间的比赛竞技。</div>
                </div>
              </a>
            </div>
          </div>
          <!-- 游戏板块 OVER -->
          <div class="clearfix" />


          <div class="index_right_enter">
            <a href="newslist_dajia.html">
              <img src="img/index_enter_01.jpg" alt="">
              <span>打假专栏</span>
            </a>
            <!--          <a href="mailto.html">
            <img src="img/index_enter_02.jpg" alt="">
            <span>品牌查询</span>
          </a> -->
            <a href="newslist_pvprule.html">
              <img src="img/index_enter_03.jpg" alt="">
              <span>智力竞技标准规范</span>
            </a>
            <a href="newslist_cest.html">
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
import { getNews } from '@/api/article';

@Component
export default class Index extends Vue {
  async asyncData() {
    const data = await getNews();
    if (data.error) return {};
    const news = groupBy(data, 'type');
    return {
      news,
    };
  }
}
</script>
