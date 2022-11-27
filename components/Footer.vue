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
      <div class="flex justify-center">
        <figure class="goat-front-mask">
          <nuxt-img
              src="/yuka/vertical/68.webp"
              class="opacity-80"
              format="webp"
              loading="lazy"
          />
        </figure>
      </div>
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
      <div class="flex justify-center">
        <figure class="goat-back-img">
          <nuxt-img
              src="/yuka/vertical/114.webp"
              class="opacity-80"
              format="webp"
              loading="lazy"
          />
        </figure>
      </div>
    </div>

    <div class="mt-64">
      <div class="half-circle-area">
        <div class="half-circle"></div>
      </div>
    </div>

    <div class="one-page bg-profile">
      <div class="sign-area">
        <nuxt-img
            src="/draw/draw_goat.webp"
            format="webp"
            loading="lazy"
        />
      </div>
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
      <div class="enable-drag-profile my-8">

      <div class="sign-area">
        <nuxt-img
            src="/draw/draw_sign.webp"
            format="webp"
            loading="lazy"
        />
      </div>

      <div class="footer-area">
        <div class="text-footer">
          Yuka<br>Kohinata
        </div>
      </div>

      <div id="dragGoat4" class="goat-wrapper">
        <input type="checkbox">
        <label>
          <i class="icon-off bg-goat-04"></i>
        </label>
      </div>

      <div id="dragGoat5" class="goat-wrapper">
        <input type="checkbox">
        <label>
          <i class="icon-off bg-goat-05"></i>
        </label>
      </div>

      <div id="dragGoat6" class="goat-wrapper">
        <input type="checkbox">
        <label>
          <i class="icon-off bg-goat-06"></i>
        </label>
      </div>

      </div>
    </div>

  </div>
</template>

<script>
import gsap from "gsap"
import { Draggable } from "gsap/Draggable";

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
          // markers: true,
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

      gsap.set("#dragGoat4",{
        display: "block",
        x: -30,
        y: 0
      });
      gsap.set("#dragGoat5",{
        display: "block",
        x:300,
        y:350
      });
      gsap.set("#dragGoat6",{
        display: "block",
        x: -150,
        y: 80
      });

      // Create Draggable instance
      Draggable.create("#dragGoat4", {
        type: "x,y",
        bounds: ".enable-drag-profile",
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
      Draggable.create("#dragGoat5", {
        type: "x,y",
        bounds: ".enable-drag-profile",
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
      Draggable.create("#dragGoat6", {
        type: "x,y",
        bounds: ".enable-drag-profile",
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
  mask-position: center;
  mask-size: auto 100%;
  -webkit-mask-image: url("@/assets/photos/goat/front.svg");
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: auto 100%;
  /*margin: 0 auto;*/
  /*width: 512px;*/
  /* top と left に 50% を指定して、要素の左上を中央にする. */
  position: absolute;
  top: 40%;
  /*left: 50%;*/
  /* 要素の大きさの半分をネガティブマージンとすることで、要素を画面中央にする. */
  margin-top: -385px;
  /*margin-left: -256px;*/
}

.goat-back-img {
  /*マスクレイヤーとして使用する画像*/
  mask-image: url("@/assets/photos/parfaits.svg");
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: auto 100%;
  -webkit-mask-image: url("@/assets/photos/parfaits.svg");
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: auto 100%;
  top: 60%;
  width: 360px;
  margin-top: -400px;
  position: absolute;
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

.enable-drag-profile {
  top: 0;
  /*height: 70%;*/
  height: 100%;
  width: 100%;
  position: absolute;
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

/* やぎボタン */
.goat-wrapper {
  display: none;
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

.bg-goat-04:after {
  background-image: url("@/assets/photos/goat/badge/4.webp");
  background-size: cover;
  background-position: center;
}
.bg-goat-05:after {
  background-image: url("@/assets/photos/goat/badge/5.webp");
  background-size: cover;
  background-position: center;
}
.bg-goat-06:after {
  background-image: url("@/assets/photos/goat/badge/6.webp");
  background-size: cover;
  background-position: center;
}

</style>