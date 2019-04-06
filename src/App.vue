<script>
import PageCover from './slides/PageCover.vue';
import PageCtf from './slides/PageCtf.vue';
import PageRce from './slides/PageRce.vue';
import PagePlayground from './slides/PagePlayground.vue';

export default {
  name: 'app',

  components: {
    PageCover,
    PageCtf,
    PageRce,
    PagePlayground,
  },
};
</script>

<template>
  <div id="app">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <page-cover />
      <page-ctf />
      <page-rce />
      <page-playground />
    </full-page>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  color: black;
  background: black;
  font-family: -apple-system, BlinkMacSystemFont,
    "Segoe UI", Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

button:focus {
  outline-style: none;
  box-shadow: unset;
  border-color: transparent;
}

.page {
  margin: 0;
  height: 100vh;
}
</style>
