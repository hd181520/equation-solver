<script>
export default {
  name: 'PageRce',
};
</script>

<template>
  <div class="section page rce">
    <div class="rce__title">
      <h1>그래서, 리버싱이 뭐죠?</h1>
      <p>이미 만들어진 프로그램을 뜯어서 그 동작 원리를 분석</p>
    </div>
    <div class="rce_content">
      <img src="./../assets/hello_dimigo.png" height="300vh"/>
      <p class="summary">디스어셈블리 툴 IDA에서 제공하는 헥스레이 기능<br>
        분석결과를 통해 위 프로그램은 <b>헬로디미고</b>를 출력한다는 걸 알 수 있음</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rce {
  color: black;
  background: white;
  font-size: 140%;
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

  img {
    border: 8px solid black;
    border-radius: 8px;
  }

  p.summary {
    font-size: 1.5em;
  }
}
</style>
