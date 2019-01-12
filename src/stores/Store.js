import Vue from 'vue'
import Vuex from 'vuex'
import AccountStore from "./AccountStore";

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    modules: {
        accountStore: AccountStore
    }
});
