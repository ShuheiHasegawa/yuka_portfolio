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
      <div class="footer-text">
        <p>
          Yuka Kohinata
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

.half-circle {
  background: #FEACB7;
  border-radius: 50%;
  bottom: -50vmax;
  height: 100vmax;
  width: 100vmax;
  position: absolute;
  pointer-events: none;
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
  font-size: 2em;
  width: 100%;
  bottom: 0;
}
</style>