import Vue from 'vue'
import Toasted from 'vue-toasted';
import App from './App.vue'
import router from './Routing/routing'
import store from './components/store/index'

Vue.use(Toasted);

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
