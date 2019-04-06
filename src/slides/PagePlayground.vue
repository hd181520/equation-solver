<script>
export default {
  name: 'PagePlayground',

  data() {
    return {
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
</template>

<style lang="scss" scoped>
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
