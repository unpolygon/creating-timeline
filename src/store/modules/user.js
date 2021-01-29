import axios from 'axios';

const url = 'http://localhost:5000/';

const state = {
    user: null
};

const getters = {
    getUser: state => state.user,
    getUserEmail: state => state.user.email
};

const actions = {
    async signupPost({ commit }, user) {
        await axios.post(
            url + 'user/signup', user
        ).then(
            response => {
                commit('newUser', response.data.user)
                // console.log(response.headers);
            }
        ).catch(
            err => {
                console.log(err.response);
                commit('newUser', err.response.data)
            }
        );
    },

    async loginPost({ commit }, user) {
        await axios.post(
            url + 'user/login', user, {withCredentials: true}
        ).then(
            response => {
                // this.$cookies.set("user_session","25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX",'1d')
                commit('newUser', response.data.user)
            }
        ).catch(
            err => {
                console.log("catch: ",err.response);
                commit('newUser', err.response.data);
            }
        )
    },

    async logoutGet({ commit }){
        await axios.get(
            url + 'user/logout', {withCredentials: true}
        ).then(
            response =>{
                console.log(response);
                commit('newUser', null)
            } 
        ).catch(
            err => console.log(err)
        )
    },

    async checkUser({ commit }){
        await axios.get(
            url+'user/', {withCredentials: true}
        ).then(
            response => commit('newUser', response.data.user)
        ).catch(
            err => console.log(err)
        );
    }
};

const mutations = {
    newUser: (state, res) => (state.user = res),
};

export default {
    state,
    getters,
    actions,
    mutations
}