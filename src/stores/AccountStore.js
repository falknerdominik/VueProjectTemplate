const AccountStore = {
   state: {
       account: undefined
   },

   getters: {
        isLoggedIn: state => {
          return state.account !== undefined && state.account !== null  && state.account !== null;
        },
        account: (state, getters) => {
            if(getters.isLoggedIn) {
                return state.account;
            }
            return null;
        }
   },

   mutations: {
       logout({ state }) {
           state.account = undefined;
       }
   }
};

export default AccountStore;

