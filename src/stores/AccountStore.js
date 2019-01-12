import LoginService from '../services/mock/MockAccountService';

const AccountStore = {
    state: {
        account: undefined
    },

    getters: {
        isLoggedIn: state => {
            return state.account !== undefined && state.account !== null && state.account !== null;
        },
        account: (state, getters) => {
            if (getters.isLoggedIn) {
                return state.account;
            }
            return null;
        }
    },

    mutations: {
        setAccount(state, account) {
            state.account = account;
        },
        logout(state) {
            state.account = undefined;
        }
    },

    actions: {
        login({ commit }, credentials) {
            return new Promise((resolve, reject) => {
                LoginService.tryLogin(credentials)
                    .then(account => {
                        commit('setAccount', account);
                        resolve(account);
                    })
                    .catch(err => {
                        reject(err);
                    });
            });
        }
    }
};

export default AccountStore;

