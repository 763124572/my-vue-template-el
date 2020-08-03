import Vue from 'vue'
import Vuex from 'vuex'
import a from './other'

Vue.use(Vuex)

const state = {
    keepAlive: [],
}

const getters = {
    keepAlive: state => state.keepAlive,
}

const mutations = {
    SET_KEEPALIVE(state, arr) {
        state.keepAlive = arr
    }
}

const actions = {

}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        a,
    }
})