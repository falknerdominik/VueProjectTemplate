import LoginService from '../services/mock/MockLoginService';

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
        login({ commit, getters }, credentials) {
            const loginAttempt = LoginService.tryLogin(credentials);
            if (loginAttempt.state === 'successful') {
                commit('setAccount', loginAttempt.account);
            }

            return getters.account;
        }
    }
};

export default AccountStore;

