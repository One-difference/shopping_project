import { trade,trade2 } from '../api'

const actions = {
    async trade({ commit }) {
        let result = await trade()
        //console.log(result)
        if (result.code == 200) {
            //console.log(result.data)
            commit('trade', result.data)
        }
    },
    async trade2({ commit }) {
        let result = await trade2()
        //console.log(result)
        if (result.code == 200) {
            //console.log(result.data)
            commit('trade2', result.data)
        }
    },

}
//操作数据state
const mutations = {
    trade(state, value) {
        //console.log(value)
        state.value = value
    },
    trade2(state, value) {
        //console.log(value)
        state.value2 = value
    },
}
//用于存储数据
const state = {
    value: {},
    value2:[]
}
//
const getters = {

}
export default {
    actions,
    mutations,
    state,
    getters
}