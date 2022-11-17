<template>
    <div class="opening-area">
      <div class="title-area">
        <h1 class="title">
          <span>Y</span>
          <span>U</span>
          <span>K</span>
          <span>A</span>
  <!--        <span>&nbsp</span>-->
          <br>
          <span>K</span>
          <span>O</span>
          <span>H</span>
          <span>I</span>
          <span>N</span>
          <span>A</span>
          <span>T</span>
          <span>A</span>
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
      //1.5秒かけ黒色背景を表示
      gsap.to(".background-color", {
        duration: 1, //アニメーションの時間の設定
        opacity: 1, //表示状態の指定
      });

//初期遅延3.5秒かけてから.titleを表示
      gsap.to(".title span", {
        delay: 0.25, //アニメーションの初期遅延（アニメーションが開始されるまでの指定）
        duration: 0.5, //アニメーションの時間の設定
        opacity: 1, //表示状態の指定
        //同じclass名のバリデーションの設定
        stagger: {
          each: 0.2, //ディレイ時間
          from: "start", //出現方法の指定
        },
      });

    }

  }
}
</script>

<style scoped>
.opening-area {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}

.title-area {
  bottom: 5vh;
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