<script>
export default {
  name: 'PageCtf',
};
</script>

<template>
  <div class="section page ctf">
    <div class="ctf__title">
      <h1>먼저, CTF 좋아하세요?</h1>
      <p>Capture The Flag <s style="font-weight: 200;">깃발 가져가기</s></p>
      <p class="summary">= 주어진 바이너리나 페이지 등을 분석,<br>
        취약점 익스로 '플래그'라는 문자열을 찾아 점수를 얻는 대회</p>
    </div>
    <div class="ctf__content">
      <ul>
        <li>
          PWN: 시스템 해킹
        </li>
        <li class="strong">
          <strong>REV: 리버스 엔지니어링(역공학)</strong>
        </li>
        <li>
          WEB: 웹해킹
        </li>
        <li>
          MISC: 🎸
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ctf {
  font-size: 140%;
  color: white;
  background: black;
  text-align: center;

  &__title {
    margin-top: 2em;
    padding-top: 5em;
  }

  h1 {
    margin: 0;
    font-size: 3.5em;
  }

  p {
    margin: 0;
    font-size: 2em;
  }

  p.summary {
    font-size: 1.5em;
  }

  ul {
    text-align: left;
    font-size: 2.8em;
    margin-left: 2em;
    margin-bottom: 0;
  }

  .strong {
    font-size: 110%;
  }
}
</style>
