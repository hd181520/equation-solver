<script>
export default {
  name: 'PageCover',
};
</script>

<template>
  <div class="section page cover">
    <div class="cover__title">
      <h1>해킹과 방정식</h1>
      <p><b>컴퓨터</b>로 <small>고차</small>방정식의 <b>해</b>를 구할 수 있을까?</p>
    </div>
    <span class="cover__emoji">☠️</span>
    <div class="cover__author">1520 여준호</div>
  </div>
</template>

<style lang="scss" scoped>
.cover {
  color: white;
  background: black;
  text-align: center;

  &__title {
    padding-top: 8em;
    margin-bottom: 1.5em;
  }

  h1 {
    margin: 0;
    font-size: 7.5em;
  }

  p {
    margin: 0;
    font-size: 4em;
  }

  small {
    font-size: 70%;
  }

  &__emoji {
    font-size: 8em;
  }

  &__author {
    margin-top: 1.5em;
    font-size: 3em;
  }
}
</style>
