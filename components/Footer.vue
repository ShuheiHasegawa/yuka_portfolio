<template>
  <div class="relative">

    <div class="half-circle"></div>

    <div class="text">
      <p>I love goats.</p>
      <p>I love parfaits.</p>
    </div>

    <div class="bottom-area">
      <p>
        I am a Japanese gravure idol and fashion model.
        Belongs to CONPASS.
      </p>

      <figure class="goat-front-img">
        <img src="@/assets/photos/_DSC3864.jpg"/>
      </figure>

      <figure class="goat-back-img">
        <img src="@/assets/photos/_DSC3864.jpg"/>
      </figure>

      <div class="footer-text">
        <p>
          Yuka<br>Kohinata
        </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.relative {
  background-color: white;
}

.half-circle {
  background: #FEACB7;
  /*border-radius: 50%;*/
  /*bottom: -50vmax;*/
  /*height: 100vh;*/
  /*width: 100vw;*/
  /*position: absolute;*/
  /*pointer-events: none;*/

  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  height: 360px;
  /*margin-left: -100px;*/
  /*margin-right: -100px;*/
  padding-left: 100px;
  padding-right: 100px;
}

.half-circle p {
  margin: 0 auto;
  position: absolute;
  text-align: center;
  /*padding: 4em;*/
  font-size: 2em;
  color: #d32254;
}

.bottom-area {
  position: absolute;
  height: 75vmax;
  width: 100%;
  /*width: 100vmax;*/
  background: #FEACB7;
  /*bottom: 0;*/
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
  display: block;
  position: absolute;
  font-size: 2em;
  width: 100%;
  bottom: 200px;
  text-align: center;
}

.footer-text {
  display: block;
  position: absolute;
  font-size: 1.8em;
  width: 100%;
  bottom: 1em;
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
}
</style>