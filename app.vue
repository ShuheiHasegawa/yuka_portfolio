<template>
  <div>
    <Opening/>
    <Header/>
<!--    <Banner/>-->
    <Panels/>
    <Footer/>
  </div>
</template>

<script setup lang="ts">
// const theme = ref('light')
// const toggleTheme = () => theme.value = theme.value === 'light' ? 'dark' : 'light'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kiwi+Maru&family=Roboto:wght@300&display=swap');

body {
  height: 100%;
  width: 100%;
  font-family: 'Kiwi Maru', serif;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}

.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}

.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}

.light-theme {
  background-color: #fff;
}
.dark-theme {
  background-color: #091a28;
}
.sepia-theme {
  background-color: #f1e7d0;
}
</style>