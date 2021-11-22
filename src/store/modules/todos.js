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
    async addTodo({commit}, title){
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false});
        commit('newTodo', response.data);
    },
    async deleteTodo({commit}, id){
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

        commit('removeTodo', id);
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
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    increaseCount: (state) => (state.count += 1),
    decreaseCount: (state) => (state.count > 0 ? state.count -= 1 : state.count = 0),
};

export default {
    state,
    getters,
    actions,
    mutations
}