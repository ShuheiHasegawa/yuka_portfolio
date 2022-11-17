<template>

<!--  <img id="img" src="@/assets/photos/_DSC0094.jpg">-->
<!--  <svg id="svg">-->
<!--    <defs>-->
<!--      <mask id="mask">-->
<!--        <rect width="100%" height="100%" fill="white"></rect>-->
<!--        <circle id="circle" cx="50%" cy="50%" r="60" fill="black"></circle>-->
<!--      </mask>-->
<!--    </defs>-->
<!--    <rect id="whiteLayer" width="100%" height="100%" fill="white"></rect>-->
<!--    <rect width="100%" height="100%" fill="black" mask="url(#mask)"></rect>-->
<!--  </svg>-->
<!--  <div id="content"></div>-->

  <section class="js-mv main">
    <!--ここからtransitionコードを開始-->
<!--    <transition-->
<!--        appear-->
<!--        @before-enter="headerBeforeEnter"-->
<!--        @enter="headerEnter"-->
<!--    >-->
<!--      <div class="header-container" style="display: none;">-->
<!--        <div class="header-title">-->
<!--          <span class="header-title-text">Vue x GSAP</span>-->
<!--        </div>-->
<!--        <transition-->
<!--            appear-->
<!--            @before-enter="linksBeforeEnter"-->
<!--            @enter="linksEnter"-->
<!--        >-->
<!--          <div class="links-container">-->
<!--            <div class="links">-->
<!--              <a href="#">Link 1</a>-->
<!--              <a href="#">Link 2</a>-->
<!--              <a href="#">Link 3</a>-->
<!--            </div>-->
<!--          </div>-->
<!--        </transition>-->
<!--      </div>-->
<!--    </transition>-->
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
            <div
                class="rounded-full h-20 w-20 light-theme text-center"
                @click="$colorMode.preference = 'purple'"
            ><span class="text-black theme-text">Purple</span></div>
          </h1>
        </div><!-- /header -->
      </header>

      <div class="bg-circle-01"></div>
      <div class="bg-circle-02"></div>

    <div id="dragGoat1" class="goat-wrapper">
      <input type="checkbox">
      <label><i class="icon-off bg-goat-01"></i>
      </label>
    </div>

    <div id="dragGoat2" class="goat-wrapper">
      <input type="checkbox">
      <label><i class="icon-off bg-goat-02"></i>
      </label>
    </div>

    <div id="dragGoat3" class="goat-wrapper">
      <input type="checkbox">
      <label><i class="icon-off bg-goat-03"></i>
      </label>
    </div>

          <!-- 丸い図形 -->
          <div class="c-mv_bubble js-mv-bubble">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1324 768">
              <defs>
                  <linearGradient v-for="(bubble, index) in bubbleList"
                      :id="'bubble_' + index"
                      :data-name="'bubble_' + index"
                      :x1="bubble.x1"
                      :y1="bubble.y1"
                      :x2="bubble.x2"
                      :y2="bubble.y2"
                      :gradientTransform="bubble.gradientTransform"
                      gradientUnits="userSpaceOnUse">
                    <stop offset="0" :stop-color="bubble.color1"/>
                    <stop offset="1" :stop-color="bubble.color2"/>
                  </linearGradient>

<!--                <linearGradient id="bubble" y1="496.5" x2="121" y2="496.5" gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">-->
<!--                  <stop offset="0" stop-color="#9796f0"/>-->
<!--                  <stop offset="1" stop-color="#fbc7d4"/>-->
<!--                </linearGradient>-->
<!--                <linearGradient id="bubble_2" data-name="bubble 2" x1="619" y1="576.5" x2="702"-->
<!--                                y2="576.5" gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">-->
<!--                  <stop offset="0" stop-color="#ddd6f3"/>-->
<!--                  <stop offset="1" stop-color="#faaca8"/>-->
<!--                </linearGradient>-->
<!--                <linearGradient id="bubble_3" data-name="bubble 3" x1="1166" y1="317" x2="1324"-->
<!--                                y2="317" gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">-->
<!--                  <stop offset="0" stop-color="#6190e8"/>-->
<!--                  <stop offset="1" stop-color="#a7bfe8"/>-->
<!--                </linearGradient>-->
<!--                <linearGradient id="bubble_4" data-name="bubble 4" x1="981" y1="549" x2="1051"-->
<!--                                y2="549" gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">-->
<!--                  <stop offset="0" stop-color="#feac5e"/>-->
<!--                  <stop offset="0.5" stop-color="#c779d0"/>-->
<!--                  <stop offset="1" stop-color="#4bc0c8"/>-->
<!--                </linearGradient>-->
<!--                <linearGradient id="bubble_5" data-name="bubble 5" x1="753" y1="495" x2="903"-->
<!--                                y2="495" gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">-->
<!--                  <stop offset="0" stop-color="#fbed96"/>-->
<!--                  <stop offset="1" stop-color="#abecd6"/>-->
<!--                </linearGradient>-->
<!--                <linearGradient id="bubble_6" data-name="bubble 6" x1="704" y1="219.5" x2="845"-->
<!--                                y2="219.5" gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">-->
<!--                  <stop offset="0" stop-color="#ffefba"/>-->
<!--                  <stop offset="1" stop-color="#fff"/>-->
<!--                </linearGradient>-->
<!--                <linearGradient id="bubble_7" data-name="bubble 7" x1="965" y1="349" x2="1081"-->
<!--                                y2="349" gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">-->
<!--                  <stop offset="0" stop-color="#dbe6f6"/>-->
<!--                  <stop offset="1" stop-color="#c5796d"/>-->
<!--                </linearGradient>-->
<!--                <linearGradient id="bubble_8" data-name="bubble 8" x1="169" y1="193.5" x2="382"-->
<!--                                y2="193.5" gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">-->
<!--                  <stop offset="0" stop-color="#7f7fd5"/>-->
<!--                  <stop offset="0.5" stop-color="#86a8e7"/>-->
<!--                  <stop offset="1" stop-color="#91eae4"/>-->
<!--                </linearGradient>-->
<!--                <linearGradient id="bubble_9" data-name="bubble 9" x1="476" y1="290" x2="580"-->
<!--                                y2="290" gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">-->
<!--                  <stop offset="0" stop-color="#efefbb"/>-->
<!--                  <stop offset="1" stop-color="#d4d3dd"/>-->
<!--                </linearGradient>-->
<!--                <linearGradient id="bubble_10" data-name="bubble 10" x1="355" y1="654.5" x2="518"-->
<!--                                y2="654.5" gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">-->
<!--                  <stop offset="0" stop-color="#c9d6ff"/>-->
<!--                  <stop offset="1" stop-color="#e2e2e2"/>-->
<!--                </linearGradient>-->
<!--                <linearGradient id="bubble_11" data-name="bubble 11" x1="169" y1="696.5" x2="254"-->
<!--                                y2="696.5" gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">-->
<!--                  <stop offset="0" stop-color="#d9a7c7"/>-->
<!--                  <stop offset="1" stop-color="#fffcdc"/>-->
<!--                </linearGradient>-->
<!--                <linearGradient id="bubble_12" data-name="bubble 12" x1="1039" y1="725.5"-->
<!--                                x2="1124" y2="725.5" gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">-->
<!--                  <stop offset="0" stop-color="#c9ffbf"/>-->
<!--                  <stop offset="1" stop-color="#ffafbd"/>-->
<!--                </linearGradient>-->
<!--                <linearGradient id="bubble_13" data-name="bubble 13" x1="907" y1="87" x2="1081"-->
<!--                                y2="87" gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">-->
<!--                  <stop offset="0" stop-color="#e1eec3"/>-->
<!--                  <stop offset="1" stop-color="#f05053"/>-->
<!--                </linearGradient>-->
              </defs>
              <g id="item14"
                 @click="$colorMode.preference = 'light'"
              >
                <circle class="cls-1" cx="60.5" cy="271.5" r="60.5"/>
              </g>
              <g id="item13"
                 @click="$colorMode.preference = 'light'"
              >
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
import {Draggable} from "gsap/Draggable";

// import {ScrollTrigger} from "gsap/ScrollTrigger"
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

    const bubbleList = [
      {
        y1: 496.5,
        y2: 496.5,
        x1: 121,
        x2: 121,
        gradientTransform: "matrix(1, 0, 0, -1, 0, 768)",
        color1: "#9796f0",
        color2: "#fbc7d4",
        color3: "",
      },
      {
        y1: 576.5,
        y2: 576.5,
        x1: 619,
        x2: 702,
        gradientTransform: "matrix(1, 0, 0, -1, 0, 768)",
        color1: "#ddd6f3",
        color2: "#faaca8",
        color3: "",
      },
      {
        y1: 317,
        y2: 317,
        x1: 1166,
        x2: 1324,
        gradientTransform: "matrix(1, 0, 0, -1, 0, 768)",
        color1: "#6190e8",
        color2: "#a7bfe8",
        color3: "",
      },
      {
        y1: 549,
        y2: 549,
        x1: 981,
        x2: 1051,
        gradientTransform: "matrix(1, 0, 0, -1, 0, 768)",
        color1: "#feac5e",
        color2: "#c779d0",
        color3: "#4bc0c8",
      },
      {
        y1: 495,
        y2: 903,
        x1: 753,
        x2: 495,
        gradientTransform: "matrix(1, 0, 0, -1, 0, 768)",
        color1: "#fbed96",
        color2: "#abecd6",
        color3: "",
      },
      {
        y1: 219.5,
        y2: 219.5,
        x1: 704,
        x2: 845,
        gradientTransform: "matrix(1, 0, 0, -1, 0, 768)",
        color1: "#ffefba",
        color2: "#fff",
        color3: "#",
      },
      {
        y1: 349,
        y2: 349,
        x1: 965,
        x2: 1081,
        gradientTransform: "matrix(1, 0, 0, -1, 0, 768)",
        color1: "#dbe6f6",
        color2: "#c5796d",
        color3: "",
      },
      {
        y1: 193.5,
        y2: 193.5,
        x1: 169,
        x2: 382,
        gradientTransform: "matrix(1, 0, 0, -1, 0, 768)",
        color1: "#7f7fd5",
        color2: "#86a8e7",
        color3: "#91eae4",
      },
      {
        y1: 290,
        y2: 290,
        x1: 476,
        x2: 580,
        gradientTransform: "matrix(1, 0, 0, -1, 0, 768)",
        color1: "#efefbb",
        color2: "#d4d3dd",
        color3: "",
      },
      {
        y1: 654.5,
        y2: 654.5,
        x1: 355,
        x2: 518,
        gradientTransform: "matrix(1, 0, 0, -1, 0, 768)",
        color1: "#c9d6ff",
        color2: "#e2e2e2",
        color3: "",
      },
      {
        y1: 696.5,
        y2: 696.5,
        x1: 169,
        x2: 254,
        gradientTransform: "matrix(1, 0, 0, -1, 0, 768)",
        color1: "#d9a7c7",
        color2: "#fffcdc",
        color3: "",
      },
      {
        y1: 725.5,
        y2: 725.5,
        x1: 1039,
        x2: 1124,
        gradientTransform: "matrix(1, 0, 0, -1, 0, 768)",
        color1: "#c9ffbf",
        color2: "#ffafbd",
        color3: "",
      },
      {
        y1: 87,
        y2: 87,
        x1: 907,
        x2: 1081,
        gradientTransform: "matrix(1, 0, 0, -1, 0, 768)",
        color1: "#e1eec3",
        color2: "#f05053",
        color3: "",
      },
    ];

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
    // const headerBeforeEnter = (el) => {
    //   gsap.set(el, {
    //     y: "-100%",
    //     opacity: 0
    //   })
    // }

    // const headerEnter = (el, done) => {
    //   gsap.to(el, {
    //     opacity: 1,
    //     duration: 1,
    //     y: "0",
    //     ease: "Power0.easeOut",
    //     onComplete: done
    //   })
    // }

    // リンクがフェイドインするアニメーション
    // const linksBeforeEnter = (el) => {
    //   el.style.opacity = 0
    // }

    // const linksEnter = (el, done) => {
    //   gsap.to(el, {
    //     duration: 1,
    //     opacity: 1,
    //     delay: 1,
    //     onComplete: done
    //   })
    // }

    // return { headerBeforeEnter, linksBeforeEnter, headerEnter, linksEnter, particlesInit, particlesOptions }
    return { bubbleList }
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
      // const jsBubble = '.js-mv-bubble [id*=item]'; // バブル（丸い図形）
      const jsBubble = '.js-mv-bubble'; // バブル（丸い図形）
      const jsText = '.js-mv_title-item span'; // メインビジュアルのタイトル
      const jsLeadText = '.js-mv_title-lead'; // メインビジュアルのリード文
      const jsHeader = '.js-header'; // ヘッダー


//初期状態をセット
      gsap.set(
          [jsBubble, jsText, jsLeadText],
          //アニメーションさせない静止状態を指定する
          {
            opacity: 0,
            y: 50
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
      let tl = gsap.timeline();

      // tl.to(
      //     /* ドット */
      //     /* 0.8秒後に起動 */
      //     jsDot, {
      //       opacity: 1,
      //       y: 0,
      //       duration: 0.8,
      //       delay: 0.8,
      //       stagger: {
      //         amount: 0.5,
      //         from: "start",
      //         ease: 'power4.inOut'
      //       }
      //     },
      // ).to(
      //     /* ドット */
      //     /* 前のアニメーションが完了した後、ドットを消す */
      //     jsDot, {
      //       opacity: 0
      //     }
      // ).to(
      //     /* カーテン */
      //     /* 前のアニメーションが完了した0.5秒後に、カーテンを下へ移動 */
      //     jsLoaderBg, {
      //       y: '100%'
      //     },
      //     '+=0.5'
      // ).to(jsBubble, {
      tl.to(jsBubble, {
        /* バブル */
        /* 0.2秒後に、1秒かけてバブルが個別にアニメーション */
        opacity: 1,
        y: 50,
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

      gsap
          .timeline({
            defaults: {
              ease: "power2.out", duration: 1
            }, // timelineのプロパティ
            scrollTrigger: {
              markers: true, // マーカーを表示するか（開発用）
              trigger: ".second", // この要素と交差するとイベントが発火
              start: "top center", // ウィンドウのどの位置を発火の基準点にするか
              // start: "center top", // ウィンドウのどの位置を発火の基準点にするか
              end: "bottom top", // ウィンドウのどの位置をイベントの終了点にするか
              // toggleActions: "restart none none none", // スクロールイベントで発火するアニメーションの種
            },
          })
          // .from(jsBubble, {
          //   duration: 0.5,
          //   opacity: 1,
          // })
          .to(jsBubble, {
            duration: 0.5,
            opacity: 1,
            y: -1000,
            ease: "power2.inOut",
            // each: 0.2,
            // repeat: -1,  //１つの要素がのアニメーションが終わり次第、作動
            // yoyo: true,　//yoyoあり
            // stagger: {
            //   amount: 0.6,
            //   from: "end",
            //   ease: "sine.out"
            // }
          })
          .to(jsBubble, {
            opacity: 1,
            y: 50,
            duration: 0.8, // seconds
          })

      // console.clear();
      //
      // const svg = document.querySelector("#svg");
      // const img = document.querySelector("#img");
      // const circle = document.querySelector("#circle");
      // const pad = 4;
      //
      // let radius = +circle.getAttribute("r");
      // let imgWidth, imgHeight;
      //
      // gsap.set(img, {
      //   scale: 2,
      //   xPercent: -50,
      //   yPercent: -50
      // });
      //
      // tl = gsap.timeline({
      //   scrollTrigger: {
      //     start: "top top",
      //     end: "bottom bottom",
      //     scrub: 0.2,
      //   },
      //   defaults: {
      //     duration: 1
      //   }
      // })
      //     .to(circle, {
      //       attr: {
      //         r: () => radius
      //       }
      //     }, 0)
      //     .to(img, {
      //       scale: 1,
      //     }, 0)
      //     .to("#whiteLayer", {
      //       alpha: 0,
      //       ease: "power1.in",
      //       duration: 1 - 0.25
      //     }, 0.25);
      //
      // function init() {
      //
      //   imgWidth = img.naturalWidth;
      //   imgHeight = img.naturalHeight;
      //
      //   resize();
      // }
      //
      // function resize() {
      //
      //   tl.progress(0);
      //
      //   const r = svg.getBoundingClientRect();
      //   const rectWidth = r.width + pad;
      //   const rectHeight = r.height + pad;
      //
      //   const rx = rectWidth / imgWidth;
      //   const ry = rectHeight / imgHeight;
      //
      //   const ratio = Math.max(rx, ry);
      //
      //   const width = imgWidth * ratio;
      //   const height = imgHeight * ratio;
      //
      //   const dx = rectWidth / 2;
      //   const dy = rectHeight / 2;
      //   radius = Math.sqrt(dx * dx + dy * dy);
      //
      //   gsap.set(img, { width, height });
      //
      //   tl.invalidate();
      //
      //   ScrollTrigger.refresh();
      // }
      //
      // window.addEventListener("load", init);
      // window.addEventListener("resize", resize);

      // set initial drag position
      gsap.set("#dragGoat1",{
        x:30,
        y:30
      });
      gsap.set("#dragGoat2",{
        x:300,
        y:350
      });
      gsap.set("#dragGoat3",{
        x:-210,
        y:480
      });

      // Create Draggable instance
      Draggable.create("#dragGoat1", {
        type: "x,y",
        bounds: ".main",
        // edgeResistance:0.5,
        throwProps: true,
        inertia: true,
        // autoScroll: true,
        onClick:function() {
          console.log("clicked");
        },
        onDragEnd:function() {
          console.log("drag ended");
        }
      });
      Draggable.create("#dragGoat2", {
        type: "x,y",
        bounds: ".main",
        // edgeResistance:0.5,
        throwProps: true,
        inertia: true,
        // autoScroll: true,
        onClick:function() {
          console.log("clicked");
        },
        onDragEnd:function() {
          console.log("drag ended");
        }
      });
      Draggable.create("#dragGoat3", {
        type: "x,y",
        bounds: ".main",
        // edgeResistance:0.5,
        throwProps: true,
        inertia: true,
        // autoScroll: true,
        onClick:function() {
          console.log("clicked");
        },
        onDragEnd:function() {
          console.log("drag ended");
        }
      });
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
  /*width: 390px;*/
  overflow: hidden;
  position: relative;
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
  background-image: url("@/assets/photos/_DSC3634.jpg");
  background-size: cover;
  position: absolute;
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
  z-index: -2;
  right: -25vw;
  width: 45vh;
  height: 45vh;
  border-radius: 50%;
  pointer-events: none;
}

@media (min-width: 480px) {
  .bg-circle-01 {
    background-image: url("@/assets/photos/_DSC3634.jpg");
    background-size: cover;
    position: absolute;
    z-index: -1;
    bottom: 20vh;
    left: -16vw;
    width: 80vmax;
    height: 80vmax;
    border-radius: 50%;
    pointer-events: none;
  }

  .bg-circle-02 {
    background-image: url("@/assets/photos/_DSC3409.jpg");
    background-size: cover;
    position: absolute;
    z-index: -2;
    top: 5vh;
    right: -6vw;
    width: 50vmax;
    height: 50vmax;
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
  fill: url(#bubble_1);
}

.cls-2 {
  fill: url(#bubble_2);
}

.cls-3 {
  fill: url(#bubble_3);
}

.cls-4 {
  fill: url(#bubble_4);
}

.cls-5 {
  fill: url(#bubble_5);
}

.cls-6 {
  fill: url(#bubble_6);
}

.cls-7 {
  fill: url(#bubble_7);
}

.cls-8 {
  fill: none;
}

.cls-9 {
  fill: url(#bubble_8);
}

.cls-10 {
  fill: url(#bubble_9);
}

.cls-11 {
  fill: url(#bubble_10);
}

.cls-12 {
  fill: url(#bubble_11);
}

.cls-13 {
  fill: url(#bubble_12);
}

.cls-14 {
  fill: url(#bubble_13);
}


/* やぎボタン */
.goat-wrapper {
  width: 120px;
  height: 120px;
  margin: 60px auto;
  position: relative;
  z-index: 9;
}

label {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #b25244;
  background: linear-gradient(#f7f2f6, #b2ac9e);
  position: relative;
  color: #a5a39d;
  font-size: 70px;
  text-align: center;
  line-height: 150px;
  transition: all 0.3s ease-out;
  text-shadow: 0 2px 1px rgba(0, 0, 0, 0.25);
  z-index: -1;
  box-shadow: inset 0 2px 3px rgba(255, 255, 255, 0.13), 0 5px 8px rgba(0, 0, 0, 0.3), 0 10px 10px 4px rgba(0, 0, 0, 0.3);
}

label:after {
  content: "";
  position: absolute;
  left: -20px;
  right: -20px;
  top: -20px;
  bottom: -20px;
  z-index: -2;
  border-radius: inherit;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 2px rgba(0, 0, 0, 0.3), 0 0 10px rgba(0, 0, 0, 0.15);
}

label:before {
  content: "";
  position: absolute;
  left: -10px;
  right: -10px;
  top: -10px;
  bottom: -10px;
  z-index: -1;
  border-radius: inherit;
  box-shadow: inset 0 10px 10px rgba(0, 0, 0, 0.13);
  -webkit-filter: blur(1px);
  filter: blur(1px);
}

input:checked ~ label {
  box-shadow: inset 0 2px 3px rgba(255, 255, 255, 0.13), 0 5px 8px rgba(0, 0, 0, 0.35), 0 3px 10px 4px rgba(0, 0, 0, 0.2);
  color: #9abb82;
}

.icon-off:after {
  content: "";
  display: block;
  position: absolute;
  width: 70%;
  height: 70%;
  left: 50%;
  top: 50%;
  z-index: -1;
  margin: -35% 0 0 -35%;
  border-radius: 50%;
  /*background: linear-gradient(#cbc7bc, #d2cbc3);*/
  box-shadow: 0 -2px 5px rgba(255, 255, 255, 0.05), 0 2px 5px rgba(255, 255, 255, 0.1);
  -webkit-filter: blur(1px);
  filter: blur(1px);
}

input {
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 100;
  position: absolute;
  cursor: pointer;
}

.bg-goat-01:after {
  background-image: url("@/assets/photos/goat/AdobeStock_123916254.jpeg");
  background-size: cover;
  background-position: center;
}
.bg-goat-02:after {
  background-image: url("@/assets/photos/goat/AdobeStock_42390200.jpeg");
  background-size: cover;
  background-position: center;
}
.bg-goat-03:after {
  background-image: url("@/assets/photos/goat/AdobeStock_2433910.jpeg");
  background-size: cover;
  background-position: center;
}
</style>