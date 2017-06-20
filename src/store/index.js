import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  top_title:"",
  userState:null,
  roleState:null,
  uploadData:{},
  uploadMessage:{},
  comNav:true
}

const Actions = {
    changeState({commit},num){
      commit('changeState',num)
    },
    changeRolState({commit},num){
      commit('changeRolState',num)
    },
    changeStorageData({commit},jsonData){
      commit('changeStorageData',jsonData)
    },
    changeStorageMsg({commit},jsonData){
      commit('changeStorageMsg',jsonData)
    },
    changeTitle({commit},stringData){
      commit('changeTitle',stringData)
    },
    changeComNav({commit},state2){
      commit('changeComNav',state2)
    }
  }
const Mutations = {
  changeState (state,num) {
      state.userState = num;
  },
  changeRolState(state,num){
      state.roleState = num;
  },
  changeStorageData(state,jsonData){
      state.uploadData = jsonData;
  },
  changeStorageMsg(state,jsonData){
      state.uploadMessage = jsonData;
  },
  changeTitle(state,stringData){
      state.top_title = stringData;
  },
  changeComNav(state,state2){
    state.comNav = state2;
  }
}

const Getters = {
  userState(state) {    
      return state.userState;
  },
  roleState(state){
      return state.roleState;
  },
  uploadData(state){
      return state.uploadData;
  },
  uploadMessage(state){
      return state.uploadMessage;
  },
  top_title(state){

      return state.top_title;
  },
  comNav(state){
    return state.comNav;
  }
}

export default new Vuex.Store({
  state:state,
  actions:Actions,
  mutations:Mutations,
  getters:Getters
})
