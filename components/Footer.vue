<template>
  <div class="relative">

    <div class="goat-front-area">
      <div class="w-screen flex justify-center items-center">
        <figure class="goat-front-img">
          <img src="@/assets/photos/_DSC3864.jpg"/>
        </figure>
      </div>
    </div>

    <div class="half-circle-area">
      <div class="half-circle"></div>
    </div>

    <div class="profile-area h-screen flex justify-center items-center">
      <div class="text">
<!--        <p>I love goats.</p>-->
<!--        <p>I love parfaits.</p>-->
        <p>
          I am a Japanese gravure idol and fashion model.
          <br>
          Belongs to CONPASS.
        </p>
      </div>
    </div>

    <div class="bottom-area h-screen w-screen flex justify-center items-center">
      <div class="goat-back-img">
        <img src="@/assets/photos/_DSC3864.jpg"/>
      </div>
    </div>

    <div class="footer-text">
      YUKA<br>KOHINATA
    </div>

  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.half-circle-area {
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
  height: 60vmax;
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
  height: 60vmax;
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
  margin: 0 auto;
  width: 512px;
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
  margin: 0 auto;
  width: 512px;
}

.footer-text {
  background: #FEACB7;
  color: #d32254;
  font-size: 2em;
  /*height: 20vmax;*/
  padding: 1em 0 1em 0;
  width: 100%;
  text-align: center;
}

</style>