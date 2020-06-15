import Util from '../../util/common'
import * as types from '../types'
const state = {
  token:0,
  userinfo:{}
}

const mutations = {
  [types.CHANGE_TOKEN] (state,res) {
    state.token = res
  },

  [types.SAVE_USERINFO] (state,res) {
    state.userinfo = res
  }
}

export default {
  state,
  mutations
}
