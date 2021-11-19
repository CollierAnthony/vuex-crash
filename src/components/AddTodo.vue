<template>
    <div>
        <h3>Add Todo</h3>
        <div class="add">
            <form>
                <input type="text" v-model="title" placeholder="Add Todo...">
                <input type="submit" value="Submit">
            </form>
        </div>
        <h1>Count : {{ fetchCount }}</h1> <button v-on:click="increase">increase count</button> <button v-on:click="decrease">decrease count</button>

    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default{
        name: 'AddTodo',
        data(){
            return{
                title: "",
            }
        },
        methods:{
            ...mapActions(["increaseCount", "decreaseCount"]),
            increase(){
                this.increaseCount()
            },
            decrease(){
                this.decreaseCount()
            }
        },
        computed:{
            ...mapGetters(["fetchCount"]),
        },
    }
</script>

<style scoped>
    form {
        display: flex;
    }
    input[type="text"] {
        flex: 10;
        padding: 10px;
        border: 1px solid #41b883;
        outline: 0;
    }
    input[type="submit"] {
        flex: 2;
        background: #41b883;
        color: #fff;
        border: 1px #41b883 solid;
        cursor: pointer;
    }
</style>