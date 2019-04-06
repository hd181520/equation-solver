<script>
export default {
  name: 'app',
  created() {},
  data() {
    return {
      options: {
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3'],
      },
      input: '',
      exp: new this.$expression(),
    };
  },
  computed: {
    expString() {
      return this.exp.toString();
    },
    expAnsX() {
      try {
        return this.exp.solveFor('x');
      } catch {
        return undefined;
      }
    },
  },
  methods: {
    toTex(exp) {
      return this.algebra.toTex(exp);
    },
    solveFor(variable) {
      try {
        return this.exp.solveFor(variable);
      } catch {
        return undefined;
      }
    },
    setExample(exp) {
      this.input = exp;
      this.onChangeInput();
    },
    onChangeInput() {
      this.exp = this.algebra.parse(this.input);
    },
  },
};
</script>

<template>
  <div id="app">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section page cover">
        <div class="cover__title">
          <h1>해킹과 방정식</h1>
          <p><b>컴퓨터</b>로 <small>고차</small>방정식의 <b>해</b>를 구할 수 있을까?</p>
        </div>
        <span class="cover__emoji">☠️</span>
        <div class="cover__author">1520 여준호</div>
      </div>
      <div class="section page ctf">
        <div class="ctf__title">
          <h1>잠깐, CTF 좋아하세요?</h1>
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
      <div class="section page rce">
        <div class="rce__title">
          <h1>그래서, 리버싱이 뭐죠?</h1>
          <p>이미 만들어진 프로그램을 뜯어서 그 동작 원리를 분석</p>
        </div>
        <div class="rce_content">
          <img src="./assets/hello_dimigo.png" height="300vh"/>
          <p class="summary">디스어셈블리 툴 IDA에서 제공하는 헥스레이 기능<br>
            분석결과를 통해 위 프로그램은 <b>헬로디미고</b>를 출력한다는 걸 알 수 있음</p>
        </div>
      </div>
      <div class="section page playground">
        <div class="playground__title">
          <h1>지금 살펴볼까요?</h1>
          <p>간단한 자바스크립트 솔버, Algebra</p>
        </div>
        <h2>입력</h2>
        <input
          v-model="input"
          @keyup="onChangeInput"
          class="playground__exp-input"
        />
        <button @click="setExample('x ^ 2 = 3x + 4')">예제</button>
        <br>
        <h2>식</h2>
        <katex-element
          :expression="toTex(exp)"
          class="playground__exp-tex"
        />
        <br>
        <h2>해</h2>
        <table>
          <tr
            v-for="v in ['x', 'y']"
            :key="v"
          >
            <td>{{ v }}</td>
            <td
              v-if="solveFor(v)"
              class="exist"
            >
              <katex-element
                :expression="toTex(solveFor(v))"
              />
            </td>
            <td v-else>
              unknown
            </td>
          </tr>
        </table>
      </div>
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

.ctf,
.rce {
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

.rce {
  color: black;
  background: white;

  img {
    border: 8px solid black;
    border-radius: 8px;
  }
}

.playground {
  background: white;
  padding-left: 3.2em;
  font-size: 180%;

  &__title {
    font-size: 110%;
    padding: 1.5em;
  }

  h1 {
    margin: 0;
    margin-top: 0.2em;
    font-size: 2.5em;
  }

  p {
    margin: 0;
  }

  &__exp-input {
    display: inline-block;
    vertical-align: middle;
    width: 50%;
    font-family: 'Noto Sans KR', serif;
    font-size: 1.5em;
    padding: 0.3em;
    border-radius: 8px;
    border: 2px solid lightgray;
  }

  &__exp-tex {
    display: inline-block;
    vertical-align: middle;
    font-size: 1.5em;
    margin: 0.5em;
  }

  h2 {
    display: inline-block;
    vertical-align: middle;
    margin-left: 1em;
    margin-right: 1em;
  }

  button {
    display: inline-block;
    vertical-align: middle;
    margin-left: 0.5em;
    font-size: 1em;
    padding: 0.5em;
    border-radius: 8px;
    border: 3px solid lightgray;
    color: gray;
  }

  button:hover,
  button:active,
  button:focus {
    color: rgb(112, 112, 112);
    border-color: rgb(112, 112, 112);
  }

  table {
    display: inline-block;
    vertical-align: middle;
    font-family: 'Noto Sans KR', serif;
    border-spacing: 1em;
  }

  td {
    font-size: 1.5em;
    padding: 0.5em;
  }

  td:first-child {
    border-right: 5px solid lightgray;
  }
}
</style>
