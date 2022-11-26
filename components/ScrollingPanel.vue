<template>
  <div class="loader df aic jcc" style="opacity: 0; visibility: hidden;">
    <div>
      <h1>Loading</h1>
      <h2 class="loader--text">100%</h2>
    </div>
  </div>
  <div class="scroll-wrapper">
    <section class="scroll-text" style="margin-bottom: 10vh">
      <div class="wrapper text" style="translate: none; rotate: none; scale: none; transform: translate3d(-1978.03px, 0px, 0px);">
        Yuka&nbsp;Kohinata&nbsp;Yuka&nbsp;Kohinata
      </div>
    </section>
    <section class="scroll-gallery">
      <ul class="wrapper" style="translate: none; rotate: none; scale: none; transform: translate3d(1362.08px, 0px, 0px);">
        <li>
          <img src="@/assets/photos/yuka/horizontal/1.webp">
        </li>
        <li>
          <img src="@/assets/photos/yuka/horizontal/12.webp">
        </li>
        <li>
          <img src="@/assets/photos/yuka/horizontal/13.webp">
        </li>
      </ul>
    </section>
    <section class="scroll-gallery">
      <ul class="wrapper" style="translate: none; rotate: none; scale: none; transform: translate(-2416px, 0px);">
        <li>
          <img src="@/assets/photos/yuka/horizontal/17.webp">
        </li>
        <li>
          <img src="@/assets/photos/yuka/horizontal/16.webp">
        </li>
        <li>
          <img src="@/assets/photos/yuka/horizontal/36.webp">
        </li>
      </ul>
    </section>
    <section class="scroll-gallery">
      <ul class="wrapper" style="translate: none; rotate: none; scale: none; transform: translate(100%, 0px);">
        <li>
          <img src="@/assets/photos/yuka/vertical/3.webp">
        </li>
        <li>
          <img src="@/assets/photos/yuka/vertical/4.webp">
        </li>
        <li>
          <img src="@/assets/photos/yuka/vertical/33.webp">
        </li>
        <li>
          <img src="@/assets/photos/yuka/vertical/42.webp">
        </li>
      </ul>
    </section>
    <section class="scroll-gallery">
      <ul class="wrapper" style="translate: none; rotate: none; scale: none; transform: translate(-3216px, 0px);">
        <li>
          <img src="@/assets/photos/yuka/vertical/74.webp">
        </li>
        <li>
          <img src="@/assets/photos/yuka/vertical/92.webp">
        </li>
        <li>
          <img src="@/assets/photos/yuka/vertical/115.webp">
        </li>
        <li>
          <img src="@/assets/photos/yuka/vertical/100.webp">
        </li>
      </ul>
    </section>
    <section class="scroll-text">
      <div class="wrapper text" style="translate: none; rotate: none; scale: none; transform: translate(100%, 0px);">
        Yuka&nbsp;Kohinata&nbsp;Yuka&nbsp;Kohinata
      </div>
    </section>
  </div>
</template>

<script>
import gsap from "gsap"

export default {
  name: "ScrollingPanel",
  mounted() {
    this.scrollAnimation()
  },
  methods: {
    scrollAnimation() {

      const images = gsap.utils.toArray('img');
      const loader = document.querySelector('.loader--text');
      const updateProgress = (instance) =>
          loader.textContent = `${Math.round(instance.progress.count * 100 / images.length)}%`;

      const showDemo = () => {
        document.body.style.overflow = 'auto';
        document.scrollingElement.scrollTo(0, 0);
        gsap.to(document.querySelector('.loader'), { autoAlpha: 0 });

        gsap.utils.toArray('section').forEach((section, index) => {
          const w = section.querySelector('.wrapper');
          if (w === null) return;
          const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
          gsap.fromTo(w, {  x  }, {
            x: xEnd,
            scrollTrigger: {
              trigger: section,
              // start: "top bottom",
              start: "10% bottom", // ウィンドウのどの位置を発火の基準点にするか
              // end: "bottom top", // ウィンドウのどの位置をイベントの終了点にするか
              scrub: 0.5,
              // pin: true,
            }
          });
        });
      }

      imagesLoaded(images).on('progress', updateProgress).on('always', showDemo);

    },
  },
}

</script>

<style scoped>
:root { font-size: 16px }
@media (max-width: 500px) { :root { font-size: 14px } }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::selection {
  background: #87cd33;
  color: white;
}

body {
  overflow: hidden;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
}

h1 { font-size: 5rem }
h2 { font-size: 2rem }

img {
  width: 100%;
  height: auto;
  background: #f0f0f0;
}

ul {
  padding-left: 1rem;
  list-style: none;
}

li {
  flex-shrink: 0;
  width: clamp(500px, 60vw, 800px);
  padding-right: 1rem;
}

:any-link { color: #4e9815; }

.df {display: flex}
.aic {align-items: center}
.jcc {justify-content: center}

.loader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
  color: white;
}

.scroll-wrapper {
  overflow: hidden;
}

.wrapper {
  display: flex;
}

.scroll-gallery img {
  height: 50vmax;
  width: 50vmax;
  border-radius: 50%;
  margin-top: 2em;
  margin-bottom: 2em;
  object-fit: cover;
}

.scroll-gallery:not(.last) {
  /*height: 100%;*/
  padding-bottom: 1rem;
}

.scroll-text .text {
  color: #d32254;
  font-size: clamp(8rem, 15vw, 16rem);
  line-height: 1;
  font-weight: 900;
}
</style>