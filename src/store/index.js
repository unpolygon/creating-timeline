import Vue from 'vue'
import Vuex from 'vuex'
import eventCard from './modules/eventCard'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    eventCard,
    user
  }
})
