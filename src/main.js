import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false
Vue.prototype.$scrollToTop = () => window.scrollTo(0,0)
Vue.use(VueCookies);

new Vue({
  VueCookies,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
