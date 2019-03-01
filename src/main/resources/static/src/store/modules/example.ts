import {Commit} from 'vuex'

interface State {
    info: string,
    hello:string
}

const state:State ={
    info : 'infoFromStore',
    hello : 'helloFromStore',
}

interface Getters {
    infoStr: (state: State, getters: Getters, rootState: any) => {},
    infoStrFromGetter:()=>{}
}

const getters = {
    infoStr: (state: State, getters: any, rootState: any) => {
        return state.info + "_str";
    },

    infoStrFromGetter:(state: State, getters: any, rootState: any)=>{
        return getters.infoStr +"_from_getter";
    }

}



const mutations = {
    updateInfo(state:State, newState:State) {
        state.info = newState.info;
    },
}

export default {
    namespaced:true,
    state,
    getters,
    // actions,
    mutations,
}