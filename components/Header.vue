<template>
  <section class="c-mv js-mv main">
    <!--ここからtransitionコードを開始-->
    <transition
        appear
        @before-enter="headerBeforeEnter"
        @enter="headerEnter"
    >
      <div class="header-container" style="display: none;">
        <div class="header-title">
          <span class="header-title-text">Vue x GSAP</span>
        </div>
        <transition
            appear
            @before-enter="linksBeforeEnter"
            @enter="linksEnter"
        >
          <div class="links-container">
            <div class="links">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </transition>
      </div>
    </transition>
    <!--ここでtransitionをクローズ-->


      <!-- 黒い背景とドット -->
<!--      <div class="c-loader-bg js-loader-bg">-->
<!--        <div class="c-loader-dot js-loader-dot-wrap">-->
<!--          <span></span>-->
<!--          <span></span>-->
<!--          <span></span>-->
<!--        </div>-->
<!--      </div>-->

      <!-- ヘッダー -->
      <header class="c-header js-header">
        <div class="theme-select c-temp">
          <h1 class="flex justify-center gap-4">
            <div
                class="rounded-full h-20 w-20 light-theme text-center"
                @click="$colorMode.preference = 'light'"
            ><span class="text-black theme-text">Light</span></div>
            <div
                class="rounded-full h-20 w-20 dark-theme text-center"
                @click="$colorMode.preference = 'dark'"
            ><span class="text-white theme-text">Dark</span></div>
            <div
                class="rounded-full h-20 w-20 sepia-theme text-center"
                @click="$colorMode.preference = 'sepia'"
            ><span class="text-black theme-text">Sepia</span></div>
          </h1>
        </div><!-- /header -->
      </header>

        <!--          <Particles-->
        <!--              id="tsparticles"-->
        <!--              :particlesInit="particlesInit"-->
        <!--              :options="particlesOptions"-->
        <!--          />-->

          <div class="bg-circle-01"></div>
          <div class="bg-circle-02"></div>

          <!-- 丸い図形 -->
          <div class="c-mv_bubble js-mv-bubble">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1324 768">
              <defs>
                <linearGradient id="名称未設定グラデーション" y1="496.5" x2="121" y2="496.5"
                                gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#9796f0"/>
                  <stop offset="1" stop-color="#fbc7d4"/>
                </linearGradient>
                <linearGradient id="名称未設定グラデーション_2" data-name="名称未設定グラデーション 2" x1="619" y1="576.5" x2="702"
                                y2="576.5"
                                gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#ddd6f3"/>
                  <stop offset="1" stop-color="#faaca8"/>
                </linearGradient>
                <linearGradient id="名称未設定グラデーション_3" data-name="名称未設定グラデーション 3" x1="1166" y1="317" x2="1324"
                                y2="317"
                                gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#6190e8"/>
                  <stop offset="1" stop-color="#a7bfe8"/>
                </linearGradient>
                <linearGradient id="名称未設定グラデーション_4" data-name="名称未設定グラデーション 4" x1="981" y1="549" x2="1051"
                                y2="549"
                                gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#feac5e"/>
                  <stop offset="0.5" stop-color="#c779d0"/>
                  <stop offset="1" stop-color="#4bc0c8"/>
                </linearGradient>
                <linearGradient id="名称未設定グラデーション_5" data-name="名称未設定グラデーション 5" x1="753" y1="495" x2="903"
                                y2="495"
                                gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#fbed96"/>
                  <stop offset="1" stop-color="#abecd6"/>
                </linearGradient>
                <linearGradient id="名称未設定グラデーション_6" data-name="名称未設定グラデーション 6" x1="704" y1="219.5" x2="845"
                                y2="219.5"
                                gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#ffefba"/>
                  <stop offset="1" stop-color="#fff"/>
                </linearGradient>
                <linearGradient id="名称未設定グラデーション_7" data-name="名称未設定グラデーション 7" x1="965" y1="349" x2="1081"
                                y2="349"
                                gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#dbe6f6"/>
                  <stop offset="1" stop-color="#c5796d"/>
                </linearGradient>
                <linearGradient id="名称未設定グラデーション_8" data-name="名称未設定グラデーション 8" x1="169" y1="193.5" x2="382"
                                y2="193.5"
                                gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#7f7fd5"/>
                  <stop offset="0.5" stop-color="#86a8e7"/>
                  <stop offset="1" stop-color="#91eae4"/>
                </linearGradient>
                <linearGradient id="名称未設定グラデーション_9" data-name="名称未設定グラデーション 9" x1="476" y1="290" x2="580"
                                y2="290"
                                gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#efefbb"/>
                  <stop offset="1" stop-color="#d4d3dd"/>
                </linearGradient>
                <linearGradient id="名称未設定グラデーション_10" data-name="名称未設定グラデーション 10" x1="355" y1="654.5" x2="518"
                                y2="654.5"
                                gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#c9d6ff"/>
                  <stop offset="1" stop-color="#e2e2e2"/>
                </linearGradient>
                <linearGradient id="名称未設定グラデーション_11" data-name="名称未設定グラデーション 11" x1="169" y1="696.5" x2="254"
                                y2="696.5"
                                gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#d9a7c7"/>
                  <stop offset="1" stop-color="#fffcdc"/>
                </linearGradient>
                <linearGradient id="名称未設定グラデーション_12" data-name="名称未設定グラデーション 12" x1="1039" y1="725.5"
                                x2="1124" y2="725.5"
                                gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#c9ffbf"/>
                  <stop offset="1" stop-color="#ffafbd"/>
                </linearGradient>
                <linearGradient id="名称未設定グラデーション_13" data-name="名称未設定グラデーション 13" x1="907" y1="87" x2="1081"
                                y2="87"
                                gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#e1eec3"/>
                  <stop offset="1" stop-color="#f05053"/>
                </linearGradient>
              </defs>
              <g id="item14">
                <circle class="cls-1" cx="60.5" cy="271.5" r="60.5"/>
              </g>
              <g id="item13">
                <circle class="cls-2" cx="660.5" cy="191.5" r="41.5"/>
              </g>
              <g id="item12">
                <circle class="cls-3" cx="1245" cy="451" r="79"/>
              </g>
              <g id="item11">
                <circle class="cls-4" cx="1016" cy="219" r="35"/>
              </g>
              <g id="item10">
                <circle class="cls-5" cx="828" cy="273" r="75"/>
              </g>
              <g id="item09">
                <circle class="cls-6" cx="474.5" cy="548.5" r="70.5"/>
              </g>
              <g id="item08">
                <circle class="cls-7" cx="1023" cy="419" r="58"/>
              </g>
              <g id="item07">
                <circle class="cls-8" cx="994" cy="681" r="87"/>
              </g>
              <g id="item06">
                <circle class="cls-9" cx="275.5" cy="574.5" r="106.5"/>
              </g>
              <g id="item05">
                <circle class="cls-10" cx="528" cy="478" r="52"/>
              </g>
              <g id="item04">
                <circle class="cls-11" cx="436.5" cy="113.5" r="81.5"/>
              </g>
              <g id="item03">
                <circle class="cls-12" cx="211.5" cy="71.5" r="42.5"/>
              </g>
              <g id="item02">
                <circle class="cls-13" cx="1081.5" cy="42.5" r="42.5"/>
              </g>
              <g id="item01">
                <path class="cls-14" d="M1081,681a87,87,0,1,1-87-87A87,87,0,0,1,1081,681Z"/>
              </g>
            </svg>
          </div>

  </section>
</template>

<script>
import gsap from "gsap"
import {loadFull} from "tsparticles";
import {loadBigCirclesPreset} from "tsparticles-preset-big-circles";
// import { VglRenderer, VglDefs, VglUse, VglScene, VglTetrahedronGeometry, VglMeshStandardMaterial,
//   VglDirectionalLight, VglMesh, VglPerspectiveCamera, } from 'vue-gl';

export default {
  components: {
    // VglRenderer,
    // VglDefs,
    // VglUse,
    // VglScene,
    // VglTetrahedronGeometry,
    // VglMeshStandardMaterial,
    // VglDirectionalLight,
    // VglMesh,
    // VglPerspectiveCamera,
  },
  setup() {

    // const colorMode = useColorMode()

    // const particlesOptions = {
    //   preset: "bigCircles", // also "big-circles" is accepted
    // };

    // async function particlesInit(engine: Engine): Promise<void> {
    //   await loadBigCirclesPreset(engine);
    // }
    // const particlesInit = async engine => {
    // await loadFull(engine);
    // await loadBigCirclesPreset(engine);
    // };

    // ヘッダーが上から下がってくるアニメーション
    const headerBeforeEnter = (el) => {
      gsap.set(el, {
        y: "-100%",
        opacity: 0
      })
    }

    const headerEnter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        duration: 1,
        y: "0",
        ease: "Power0.easeOut",
        onComplete: done
      })
    }

    // リンクがフェイドインするアニメーション
    const linksBeforeEnter = (el) => {
      el.style.opacity = 0
    }

    const linksEnter = (el, done) => {
      gsap.to(el, {
        duration: 1,
        opacity: 1,
        delay: 1,
        onComplete: done
      })
    }

    // return { headerBeforeEnter, linksBeforeEnter, headerEnter, linksEnter, particlesInit, particlesOptions }
    return {headerBeforeEnter, linksBeforeEnter, headerEnter, linksEnter}
  },
  mounted() {
    this.scrollAnimation()
  },
  methods: {
    scrollAnimation() {
      /* 文字列を分割しspanで囲む */
      const sText = document.querySelectorAll('.js-mv_title-item');
      sText.forEach(target => {
        let newText = '';
        const text = target.textContent;
        const result = text.split('');
        for (let i = 0; i < result.length; i++) {
          newText += '<span>' + result[i] + '</span>';
        }
        target.innerHTML = newText;
      });


      /* 以下アニメーション */
      const jsLoaderBg = '.js-loader-bg'; // カーテン（黒い背景）
      const jsDot = '.js-loader-dot-wrap > span'; // ドット
      const jsBubble = '.js-mv-bubble [id*=item]'; // バブル（丸い図形）
      const jsText = '.js-mv_title-item span'; // メインビジュアルのタイトル
      const jsLeadText = '.js-mv_title-lead'; // メインビジュアルのリード文
      const jsHeader = '.js-header'; // ヘッダー


//初期状態をセット
      gsap.set(
          [jsBubble, jsText, jsLeadText],
          //アニメーションさせない静止状態を指定する
          {
            opacity: 0,
            y: 30
          },
      );

      /* ドット */
      gsap.set(jsDot, {
        opacity: 0,
        y: -50
      });

      /* ヘッダー */
      gsap.set(jsHeader, {
        opacity: 0,
        y: -50
      });

// timelineを作成
      const tl = gsap.timeline();

      tl.to(
          /* ドット */
          /* 0.8秒後に起動 */
          jsDot, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.8,
            stagger: {
              amount: 0.5,
              from: "start",
              ease: 'power4.inOut'
            }
          },
      ).to(
          /* ドット */
          /* 前のアニメーションが完了した後、ドットを消す */
          jsDot, {
            opacity: 0
          }
      ).to(
          /* カーテン */
          /* 前のアニメーションが完了した0.5秒後に、カーテンを下へ移動 */
          jsLoaderBg, {
            y: '100%'
          },
          '+=0.5'
      ).to(jsBubble, {
        /* バブル */
        /* 0.2秒後に、1秒かけてバブルが個別にアニメーション */
        opacity: 1,
        y: 0,
        duration: 0.8, // seconds
        stagger: {
          amount: 0.6,
          from: "start",
          ease: "sine.in"
        }
      }, '+=0.2').to(
          /* タイトル */
          jsText, {
            /* 前のアニメーションが完了する0.1秒前に実行 */
            opacity: 1,
            y: 0,
            stagger: {
              amount: 1,
              from: "start",
              ease: "sine.in"
            }
          },
          "-=0.1"
      ).to(
          /* リード文 */
          jsLeadText, {
            /* 前のアニメーションが完了する0.1秒前に実行 */
            opacity: 1,
            y: 0,
          },
          "-=0.2"
      ).to(
          /* ヘッダー */
          /* 前のアニメーションと同時 */
          jsHeader, {
            opacity: 1,
            y: 0,
          },
          '<'
      );

    }
  }
}
</script>

<style scoped>
.l-wrapper {
  /*height: 100vh;*/
  /*width: 100vw;*/
}
.main {
  height: 100vh;
  width: 100vw;
}
.c-header {
  position: absolute;
}
.theme-select {
  /*position: absolute;*/
  /*text-align: center;*/
  /*margin: 0 auto;*/
}
.theme-text {
  line-height: 4em;
}
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: #2dd4bf;
  padding: 1.5rem;
}

.header-title {
  flex-shrink: 0;
  color: #ffffff;
  margin-right: 1.5rem;
}

.header-title-text {
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
  letter-spacing: -0.025em;
}

.links-container {
  width: 100%;
  display: block;
  flex-grow: 1;
}

.links a {
  display: block;
  color: #ffffff;
  margin-right: 3rem;
}

.links a:hover {
  color: #115e59;
}

@media (min-width: 1024px) {
  .links-container {
    display: flex;
    align-items: center;
    width: auto;
  }

  .links a {
    display: inline-block;
  }
}

.bg-circle-01 {
  background-image: url("@/assets/photos/_DSC0094.jpg");
  background-size: cover;
  position: absolute;
  display: inline-block;
  z-index: -1;
  /*top: 35vh;*/
  left: -36vw;
  width: 70vh;
  height: 70vh;
  border-radius: 50%;
  pointer-events: none;
}

.bg-circle-02 {
  background-image: url("@/assets/photos/_DSC3409.jpg");
  background-size: cover;
  position: absolute;
  display: inline-block;
  z-index: -2;
  right: -25vw;
  width: 45vh;
  height: 45vh;
  border-radius: 50%;
  pointer-events: none;
}

@media (min-width: 480px) {
  .bg-circle-01 {
    background-image: url("@/assets/photos/_DSC0094.jpg");
    background-size: cover;
    position: absolute;
    display: inline-block;
    z-index: -1;
    bottom: 0;
    left: -16vw;
    width: 80vw;
    height: 80vw;
    border-radius: 50%;
    pointer-events: none;
  }

  .bg-circle-02 {
    background-image: url("@/assets/photos/_DSC3409.jpg");
    background-size: cover;
    position: absolute;
    display: inline-block;
    z-index: -2;
    margin-top: 10vh;
    right: -16vw;
    width: 60vw;
    height: 60vh;
    border-radius: 50%;
    pointer-events: none;
  }
}

.c-loader-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: 100;
  display: grid;
  place-items: center;
  pointer-events: none;
}

.c-loader-dot {
  /*display: inline-flex;*/
  /*align-items: center;*/
  /*justify-content: start;*/
  /*pointer-events: none;*/
}

.c-loader-dot > span {
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
}

.cls-1 {
  fill: url(#名称未設定グラデーション);
}

.cls-2 {
  fill: url(#名称未設定グラデーション_2);
}

.cls-3 {
  fill: url(#名称未設定グラデーション_3);
}

.cls-4 {
  fill: url(#名称未設定グラデーション_4);
}

.cls-5 {
  fill: url(#名称未設定グラデーション_5);
}

.cls-6 {
  fill: url(#名称未設定グラデーション_6);
}

.cls-7 {
  fill: url(#名称未設定グラデーション_7);
}

.cls-8 {
  fill: none;
}

.cls-9 {
  fill: url(#名称未設定グラデーション_8);
}

.cls-10 {
  fill: url(#名称未設定グラデーション_9);
}

.cls-11 {
  fill: url(#名称未設定グラデーション_10);
}

.cls-12 {
  fill: url(#名称未設定グラデーション_11);
}

.cls-13 {
  fill: url(#名称未設定グラデーション_12);
}

.cls-14 {
  fill: url(#名称未設定グラデーション_13);
}

</style>