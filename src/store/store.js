import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        inputSearch: ''
    },
    mutations: {
        change(state, inputSearch){
            state.inputSearch = inputSearch
        }
    },
    getters: {
        inputSearch: state => state.inputSearch
    }
})