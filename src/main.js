import Vue from 'vue';
import VueFullPage from 'vue-fullpage.js';
import VueKatex from 'vue-katex';
import algebra from 'algebra.js';
import App from './App.vue';

// eslint-disable-next-line
import 'katex/dist/katex.min.css';

Vue.use(VueFullPage);
Vue.use(VueKatex);

Vue.config.productionTip = false;
Vue.prototype.algebra = algebra;
Vue.prototype.$fraction = algebra.Fraction;
Vue.prototype.$expression = algebra.Expression;
Vue.prototype.$equation = algebra.Equation;

new Vue({
  render: h => h(App),
}).$mount('#app');
