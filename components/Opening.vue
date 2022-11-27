<template>
  <div class="logo-area">
    <h1>
      <span>Yuka</span>
      <br>
      <span>Kohinata</span>
    </h1>
  </div>
  <div class="opening-area">
      <div class="title-area">
        <h1 class="title">
          <span>Y</span>
          <span>u</span>
          <span>k</span>
          <span>a</span>
          <br>
          <span>K</span>
          <span>o</span>
          <span>h</span>
          <span>i</span>
          <span>n</span>
          <span>a</span>
          <span>t</span>
          <span>a</span>
        </h1>
      </div>
    </div>
</template>

<script>
import gsap from "gsap"
export default {
  name: "Opening",
  mounted() {
    this.opAnimation()
  },
  methods: {
    opAnimation() {

      gsap
          .timeline({
            defaults: {
              ease: "power2.out", duration: 1
            },
          })
          // .to(".background-color", {
          //   duration: 1, //アニメーションの時間の設定
          //   opacity: 1, //表示状態の指定
          // })
          .to(".title span", {
              delay: 7, //アニメーションの初期遅延（アニメーションが開始されるまでの指定）
              duration: 0.5, //アニメーションの時間の設定
              opacity: 1, //表示状態の指定
              //同じclass名のバリデーションの設定
              stagger: {
                each: 0.2, //ディレイ時間
                from: "start", //出現方法の指定
              },
            })
            .to(".opening-area", {
              opacity: 0,
              display: "none"
            })
            .to(".logo-area", {
              opacity: 1,
              display: "block"
            });

    }
  }
}
</script>

<style scoped>
.logo-area {
  display: none;
  position: absolute;
  top: 10px;
  left: 16px;
  color: #d32254;
  font-size: 0.4em;
  font-weight: bold;
}

.opening-area {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}

.title-area {
  bottom: 2vh;
  /*height: 30vh;*/
  width: 100%;
  position: absolute;
  text-align: center;
}

h1 {
  font-size: 4em;
  letter-spacing: 1px;
}

.title {
  font-size: 3em;
  color: #d32254;
}

.title span {
  opacity: 0;
}
</style>