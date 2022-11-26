<template>
  <div class="relative">

    <div class="stripe-panel1 relative">
      <div class="color-one"></div>
      <div class="color-two"></div>
      <div class="color-three"></div>
      <div class="color-four">
        <div class="message text-love-goats">
          <p>I love goats.</p>
        </div>
      </div>
      <figure class="goat-front-mask">
        <img class="opacity-80" src="@/assets/photos/yuka/vertical/68.jpg"/>
      </figure>
    </div>

    <div class="stripe-panel2 relative">
      <div class="color-five"></div>
      <div class="color-six"></div>
      <div class="color-seven"></div>
      <div class="color-eight">
        <div class="message text-love-parfaits">
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
    </div>

    <div class="one-page bg-profile">
      <div class="sign-area">
        <img src="@/assets/photos/draw/draw_goat.png"/>
      </div>
<!--      <div class="profile-area h-screen flex justify-center items-center">-->
      <div class="profile-area">
        <div class="text text-profile">
          <p>
            I am a Japanese gravure idol and fashion model.
            <br>
            Belongs to CONPASS.
          </p>
        </div>
        </div>
      </div>

    <div class="one-page bg-profile">
      <div class="sign-area">
        <img src="@/assets/photos/draw/draw_sign.png"/>
      </div>

      <div class="footer-area">
        <div class="text-footer">
          Yuka<br>Kohinata
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import gsap from "gsap"

export default {
  name: "Footer",
  mounted() {
    this.scrollAnimation()
  },
  methods: {
    scrollAnimation() {

      gsap.timeline({
        scrollTrigger: {
          trigger: ".stripe-panel1",
          start: "center center",
          end: "bottom top",
          // markers: true,
          scrub: true,
          // pin: true,
        }
      })
          .from(".text-love-goats", {
            rotate: -30
          })
          .to(".text-love-goats", {
            rotate: 0
          })

      gsap.timeline({
        scrollTrigger: {
          trigger: ".stripe-panel2",
          start: "center center",
          end: "bottom top",
          // markers: true,
          scrub: true,
          // pin: true,
        }
      })
          .from(".text-love-parfaits", {
            rotate: -30
          })
          .to(".text-love-parfaits", {
            rotate: 0
          })

      gsap.timeline({
        scrollTrigger: {
          trigger: ".profile-area",
          start: "top bottom",
          markers: true,
          scrub: true,
          // pin: true,
        }
      })
          .from(".text-profile", {
            rotate: -30
          })
          .to(".text-profile", {
            rotate: 0
          })

      // gsap.timeline({
      //   scrollTrigger: {
      //     trigger: ".footer-area",
      //     start: "top bottom",
      //     markers: true,
      //     scrub: true,
      //     // pin: true,
      //   }
      // })
      //     .from(".text-footer", {
      //       y: -window.innerHeight
      //     })
      //     .to(".text-footer", {
      //       y: window.innerHeight
      //     })

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

.text {
  color: #d32254;
  font-size: 2em;
  padding: 0 1em 0 1em;
}

.goat-front-area {
  top: 0;
  position: absolute;
}

.goat-front-mask {
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
  top: 40%;
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
  top: 40%;
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
  font-size: 2em;
  position: absolute;
  bottom: 10vh;
  text-align: center;
  width: 100%;
}

.bg-profile {
  background-color: #FEACB7;
}

.one-page {
  height: 100vh;
  width: 100%;
  position: relative;
  text-align: center;
}

.sign-area {
  position: absolute;
  height: 84vh;
  width: 100%;
  top: 30vh;
  background-color: #FEACB7;
}
.sign-area > img {
  height: 30vh;
  margin: 0 auto;
}

.profile-area {
  position: absolute;
  /*height: 16vh;*/
  width: 100%;
  bottom: 0;
  z-index: 1;
}

.text-profile {
  /*position: absolute;*/
  width: 100%;
}

.footer-area {
  position: absolute;
  height: 16vh;
  width: 100%;
  bottom: 6vh;
}

.text-footer {
  background: #FEACB7;
  color: #d32254;
  font-size: 2em;
  padding: 1em 0 2em 0;
  width: 100%;
  text-align: center;
}

</style>