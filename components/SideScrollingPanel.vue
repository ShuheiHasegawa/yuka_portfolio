<template>
<!--  <section class="normal section">-->
<!--    <div class="container">-->
<!--      <h2 class="normal-heading heading">普通のセクション</h2>-->
<!--      <p class="normal-text">-->
<!--        テキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよ-->
<!--      </p>-->
<!--    </div>-->
<!--  </section>-->
<!--  <section class="side-scroll section">-->
<!--    <div class="side-scroll-container container">-->
<!--      <h2 class="side-scroll-heading heading">-->
<!--        Yuka Kohinata-->
<!--      </h2>-->
<!--      <div class="side-scroll-list-wrapper">-->
<!--        <ul class="side-scroll-list">-->
<!--          <li class="side-scroll-item">Card</li>-->
<!--          <li class="side-scroll-item">Card</li>-->
<!--          <li class="side-scroll-item">Card</li>-->
<!--          <li class="side-scroll-item">Card</li>-->
<!--          <li class="side-scroll-item">Card</li>-->
<!--          <li class="side-scroll-item">Card</li>-->
<!--        </ul>-->
<!--      </div>-->
<!--    </div>-->
<!--  </section>-->
<!--  <section class="normal section">-->
<!--    <div class="container">-->
<!--      <h2 class="normal-heading heading">普通のセクション</h2>-->
<!--      <p class="normal-text">-->
<!--        テキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよ-->
<!--      </p>-->
<!--    </div>-->
<!--  </section>-->

  <div class="item">
    <span>縦スクロール1</span>
  </div>
  <div class="item">
    <span>縦スクロール2</span>
  </div>
  <div class="item">
    <span>縦スクロール3</span>
  </div>

  <div class="area js-area">
    <div class="wrap js-wrap">
      <div class="item js-item">
        <span>横スクロール1</span>
      </div>
      <div class="item js-item">
        <span>横スクロール2</span>
      </div>
      <div class="item js-item">
        <span>横スクロール3</span>
      </div>
    </div>
  </div>

  <div class="item">
    <span>縦スクロール4</span>
  </div>
  <div class="item">
    <span>縦スクロール5</span>
  </div>
  <div class="item">
    <span>縦スクロール6</span>
  </div>

</template>

<script>
import gsap from "gsap"
export default {
  name: "SideScrollingPanel",
  mounted() {
    this.scrollAnimation()
  },
  methods: {
    scrollAnimation() {
      // const listWrapperEl = document.querySelector('.side-scroll-list-wrapper');
      // const listEl = document.querySelector('.side-scroll-list');
      //
      // gsap.to(listEl, {
      //   x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
      //   ease: 'none',
      //   scrollTrigger: {
      //     trigger: '.side-scroll',
      //     start: 'top top', // 要素の上端（top）が、ビューポートの上端（top）にきた時
      //     end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
      //     scrub: true,
      //     pin: true,
      //     anticipatePin: 1,
      //     invalidateOnRefresh: true,
      //   },
      // });

      const area  = document.querySelector(".js-area");
      const wrap  = document.querySelector(".js-wrap");
      const items = document.querySelectorAll(".js-item");
      const num   = items.length;

      gsap.set(wrap,  { width: num * 100 + "%" });
      gsap.set(items, { width: 100 / num + "%" });


      //ここから追加
      gsap.to(items, {
        xPercent: -100 * ( num - 1 ),
        ease: "none",
        scrollTrigger: {
          trigger: area,
          start: "top top",
          end: "bottom top",
          pin: true,
          scrub: true,
        }
      });

    }
  }
}
</script>

<style scoped>
/** {*/
/*  margin: 0;*/
/*  padding: 0;*/
/*  box-sizing: border-box;*/
/*}*/

/*ul,*/
/*li {*/
/*  list-style: none;*/
/*}*/

/*body {*/
/*  !*background-color: #eeebdd;*!*/
/*  !*color: #1b1717;*!*/
/*  !*font-family: Avenir, 'Helvetica neue', Helvetica, sans-serif;*!*/
/*}*/

/*!* 共通 *!*/
/*.section {*/
/*  height: 100vh;*/
/*  width: 100%;*/
/*  !*padding: 100px 0;*!*/
/*}*/
/*.container {*/
/*  width: 80%;*/
/*  max-width: 900px;*/
/*  margin: 0 auto;*/
/*}*/

/*.heading {*/
/*  font-size: 40px;*/
/*  font-weight: 700;*/
/*  letter-spacing: 0.05em;*/
/*}*/

/*!* タイトル *!*/
/*.title {*/
/*  padding: 200px 0 20px;*/
/*  font-size: 52px;*/
/*  text-align: center;*/
/*}*/

/*!* 普通のセクション *!*/
/*.normal-text {*/
/*  font-size: 20px;*/
/*  letter-spacing: 0.08em;*/
/*  margin-top: 60px;*/
/*}*/

/*!* 横スクロールセクション *!*/
/*.side-scroll {*/
/*  background-color: #1b1717;*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*}*/

/*.side-scroll-heading {*/
/*  color: #eeebdd;*/
/*}*/

/*.side-scroll-list-wrapper {*/
/*  position: relative;*/
/*  width: 100%;*/
/*  height: 700px;*/
/*}*/

/*.side-scroll-list {*/
/*  position: absolute;*/
/*  top: 60px;*/
/*  left: 0;*/
/*  display: flex;*/
/*  gap: 0 60px;*/
/*}*/

/*.side-scroll-item {*/
/*  display: flex;*/
/*  align-items: center;*/
/*  justify-content: center;*/
/*  width: 300px;*/
/*  height: 420px;*/
/*  background-color: #eeebdd;*/
/*  color: #1b1717;*/
/*  font-size: 32px;*/
/*  font-weight: 700;*/
/*}*/

/*.side-scroll-item + .side-scroll-item {*/
/*  margin-left: 60px;*/
/*}*/

html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure,
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
  margin:0;
  padding:0;
  border:0;
  outline:0;
  font-size:100%;
  vertical-align:baseline;
  background:transparent;
}
body {
  line-height:1;
}
article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section {
  display:block;
}
nav ul {
  list-style:none;
}
blockquote, q {
  quotes:none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content:'';
  content:none;
}
a {
  margin:0;
  padding:0;
  font-size:100%;
  vertical-align:baseline;
  background:transparent;
  text-decoration:none;
}
del {
  text-decoration: line-through;
}
abbr[title], dfn[title] {
  border-bottom:1px dotted;
  cursor:help;
}
hr {
  display:block;
  height:1px;
  border:0;
  border-top:1px solid #cccccc;
  margin:1em 0;
  padding:0;
}
input, select {
  vertical-align:middle;
}
p,.nav{
  margin:0;
}
/* ここまでreset.css */


.area{
  overflow: hidden;
}
.wrap{
  display: flex;
}
.item{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: bold;
  color: #fff;
}
.item:nth-of-type(1){
  background-color:#e94d15;
}
.item:nth-of-type(2){
  background-color:#f18d1d;
}
.item:nth-of-type(3){
  background-color:#f8b633;
}
.item:nth-of-type(4){
  background-color:#8cc561;
}
.item:nth-of-type(5){
  background-color:#56aa59;
}
.item:nth-of-type(6){
  background-color:#3d6b35;
}
.item:nth-of-type(7){
  background-color:#e94d15;
}
.item:nth-of-type(8){
  background-color:#f18d1d;
}
.item:nth-of-type(9){
  background-color:#f8b633;
}
</style>