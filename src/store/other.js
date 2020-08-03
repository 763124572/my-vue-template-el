export default {
    state: {
        a: 1
    },
    getters: {
        a: state => state.a,
    },
    mutations: {
        SET_KEEPALIVE(state, a) {
            state.a = a
        }
    },
    actions: {

    }
}