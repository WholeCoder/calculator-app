import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        weights: [],
        users: [],
        user: {}
    },
    mutations: {
        getUser(state, payload) {
            state.user = payload.data;
        },
        addUser(state, payload) {
            state.users.push(payload);
            state.user = payload;
        },
        getAllUsers(state, payload) {
            state.users = payload;
        },
        addWeight(state, payload) {
          state.weights.push(payload);
        },
        getAllWeights(state, payload) {
            state.weights = payload.data;
        },
        deleteUser(state, payload) {
            payload;
            state.user = {};
            state.users = [];
            state.weights = [];
        }
    },
    getters: {
        user(state) {
          return state.user;
        },
        users(state) {
          return state.users;
        },
        weights(state) {
            state.weights.sort(function(a, b){return new Date(a.date) - new Date(b.date)});
            return state.weights;
        },
    },
    actions: {
        deleteUser(context, payload) {
            context.commit('deleteUser', payload);
        },
        getAllWeights(context) {
            const axios = require('axios');
            axios({
                method: 'get',
                url: '/weights/'+this.getters.user.id,
                withCredentials: false,
            })
            .then(function (response) {
                context.commit('getAllWeights',response);
            })
            .catch(function (error) {
                alert(error);
            })

        },
        getUser(context, payload) {
            const axios = require('axios');
            axios({
                method: 'get',
                url: '/user/'+payload.id,
                withCredentials: false,
            })
            .then(function (response) {
                context.commit('getUser',response);

            })
            .catch(function (error) {
                alert(error);
            })

        },
        getAllUsers(context) {
            const axios = require('axios');
            axios({
                method: 'get',
                url: '/users',
                withCredentials: false,
            })
            .then(function (response) {
                context.commit('getAllUsers',response.data);
            })
            .catch(function (error) {
                alert(error);
            })

        },
        addWeight(context, payload) {
            const axios = require('axios');
            axios.post('/weights', {
                'weight': payload.currentWeight,
                'date': payload.myDate,
                'user_id': payload.user_id
            }, {})
            .then(function (response) {
                context.commit('addWeight', response.data);

            })
            .catch(function (error) {
                alert(error);
            });
        },
        addUser(context, payload) {
            const axios = require('axios');
            axios.post('/users', {
                'username': payload.username
            }, {})
            .then(function (response) {
                context.commit('addUser', response.data);
            })
            .catch(function (error) {
                alert(error);
            });
        }
    }
});

