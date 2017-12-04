import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 2017
    },
    mutations: {
        add(state) {
            ++state.count
        }
    }
})

export default store