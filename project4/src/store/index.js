
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import shopping_store from './shopping.js'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		number : 2
	},
	modules: {
		shopping : shopping_store
	},
	mutations,
	actions
})
export default store
