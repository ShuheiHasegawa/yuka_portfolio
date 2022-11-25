<template>
  <div class="relative">

    <div class="stripe-panel1 relative">
      <div class="color-one"></div>
      <div class="color-two"></div>
      <div class="color-three"></div>
      <div class="color-four">
        <div class="message">
          <p>I love goats.</p>
        </div>
      </div>
      <figure class="goat-front-img">
        <img src="@/assets/photos/_DSC3864.jpg"/>
      </figure>
    </div>

    <div class="stripe-panel2 relative">
      <div class="color-five"></div>
      <div class="color-six"></div>
      <div class="color-seven"></div>
      <div class="color-eight">
        <div class="message">
          <p>I love parfaits.</p>
        </div>
      </div>
      <figure class="goat-back-img">
        <img src="@/assets/photos/_DSC3880.jpg"/>
      </figure>
    </div>

<!--    <div class="goat-front-area">-->
<!--      <div class="w-screen flex justify-center items-center">-->
<!--        <figure class="goat-front-img">-->
<!--          <img src="@/assets/photos/_DSC3864.jpg"/>-->
<!--        </figure>-->
<!--        <img src="@/assets/photos/goat/original/AdobeStock_312826315.png"/>-->
<!--      </div>-->
<!--    </div>-->

    <div class="mt-64">
    <div class="half-circle-area">
      <div class="half-circle"></div>
    </div>

    <div class="profile-area h-screen flex justify-center items-center pt-16">
      <div class="text">
        <p>
          I am a Japanese gravure idol and fashion model.
          <br>
          Belongs to CONPASS.
        </p>
      </div>
    </div>
    </div>

<!--    <div class="bottom-area h-screen w-screen flex justify-center items-center">-->
<!--      <div>-->
<!--        <div class="goat-back-img">-->
<!--          <img src="@/assets/photos/_DSC3864.jpg"/>-->
<!--        </div>-->
<!--&lt;!&ndash;        <div class="goat-back-img1">&ndash;&gt;-->
<!--&lt;!&ndash;          <img src="@/assets/photos/goat/original/AdobeStock_429046237.png"/>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--      </div>-->
<!--    </div>-->

    <div class="footer-text">
      YUKA<br>KOHINATA
    </div>

  </div>
</template>

<script>
export default {
  name: "Footer",
  mounted() {
    this.scrollAnimation()
  },
  methods: {
    scrollAnimation() {

      gsap.timeline({
        scrollTrigger: {
          trigger: ".box2",
          start: "center center",
          end: "bottom top",
          // markers: true,
          scrub: true,
          pin: true,
        }
      })
          .from(".text4", {x: innerWidth * 1, opacity: 0})
          .from(".text5", {x: innerWidth * 1, opacity: 0})
    }
  }
}
</script>

<style type="scss" scoped>
.half-circle-area {
  height: 10vh;
  overflow: hidden;
}

.half-circle {
  background: #FEACB7;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  height: 200px;
  margin-left: -100px;
  margin-right: -100px;
  padding-left: 100px;
  padding-right: 100px;
}

.half-circle p {
  margin: 0 auto;
  position: absolute;
  text-align: center;
  color: #d32254;
}

.profile-area {
  height: 30vmax;
  background: #FEACB7;
}

.bottom-area {
  /*position: absolute;*/
  height: 100vmax;
  background: #FEACB7;
}

.bottom-area p {
  text-align: center;
  /*padding-left: 4em;*/
  /*padding-right: 4em;*/
  font-size: 2em;
  color: #d32254;
}

.text {
  color: #d32254;
  font-size: 2em;
  padding: 0 2em 0 2em;
}

.goat-front-area {
  top: 0;
  position: absolute;
}

.goat-front-img {
  /*マスクレイヤーとして使用する画像*/
  mask-image: url("@/assets/photos/goat/front.svg");
  mask-repeat: no-repeat;
  mask-position: 3% 0;
  mask-size: auto 100%;
  -webkit-mask-image: url("@/assets/photos/goat/front.svg");
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: 3% 0;
  -webkit-mask-size: auto 100%;
  /*margin: 0 auto;*/
  width: 512px;
  /* top と left に 50% を指定して、要素の左上を中央にする. */
  position: absolute;
  top: 50%;
  left: 50%;
  /* 要素の大きさの半分をネガティブマージンとすることで、要素を画面中央にする. */
  margin-top: -385px;
  margin-left: -256px;
}

.goat-back-img {
  /*マスクレイヤーとして使用する画像*/
  mask-image: url("@/assets/photos/goat/back.svg");
  mask-repeat: no-repeat;
  mask-position: 3% 0;
  mask-size: auto 100%;
  -webkit-mask-image: url("@/assets/photos/goat/back.svg");
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: 3% 0;
  -webkit-mask-size: auto 100%;
  /*margin: 0 auto;*/
  width: 512px;
  /* top と left に 50% を指定して、要素の左上を中央にする. */
  position: absolute;
  top: 50%;
  left: 50%;
  /* 要素の大きさの半分をネガティブマージンとすることで、要素を画面中央にする. */
  margin-top: -385px;
  margin-left: -256px;
}
.goat-back-img1 {
  /*マスクレイヤーとして使用する画像*/
  margin: 0 auto;
  width: 512px;
}

.footer-text {
  background: #FEACB7;
  color: #d32254;
  font-size: 2em;
  /*height: 20vmax;*/
  padding: 1em 0 2em 0;
  width: 100%;
  text-align: center;
}

.stripe-panel1 {
  height: 100vh;
}
.stripe-panel1 > div {
  height: 25%;
}
.stripe-panel2 {
  height: 100vh;
}
.stripe-panel2 > div {
  height: 25%;
}
.message {
  color: #d32254;
  font-size: 3em;
  position: absolute;
  bottom: 10vh;
  text-align: center;
  width: 100%;
}
</style>