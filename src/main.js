import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';
import VeeValidate from 'vee-validate';

// import VueCarousel from 'vue-carousel';


import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;


// Vue.use(VueCarousel);
Vue.use(VeeValidate);
// Vue.use(BootstrapVue);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
