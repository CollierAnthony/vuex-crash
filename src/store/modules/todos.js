import axios from 'axios';

const state = {
    todos:[],
    count: 0
};

const getters = {
    allTodos: (state) => state.todos,
    fetchCount:(state) => state.count,
};

const actions = {
    async fetchTodos({ commit }){
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/todos'
        );
        commit('setTodos', response.data);
    },
    async increaseCount({commit}){
        commit('increaseCount');
    },
    async decreaseCount({commit}){
        commit('decreaseCount');
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    increaseCount: (state) => (state.count += 1),
    decreaseCount: (state) => (state.count > 0 ? state.count -= 1 : state.count = 0),
};

export default {
    state,
    getters,
    actions,
    mutations
}