import Vue from 'vue'
import VueRouter from 'vue-router'
import routes  from './router/router'
import store from './store/'
import ajax from './config/ajax'
import './style/common'
import './config/rem'
import App from './App'

Vue.use(VueRouter)

const router = new VueRouter({
  routes 
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
