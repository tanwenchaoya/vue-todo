<template>
  <div>
      <todo-item 
        v-for="item of todoList"
        :key="item.id"
        :item="item"
        @removeTodo ="removeTodo"
        @setStatus="setStatus"
        @setDoing="setDoing"
      ></todo-item>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, PropType } from "vue";
import { useTodo } from "../../hooks";
import { ITodo } from "../../typings";
import TodoItem from './TodoItem.vue'
export default defineComponent({
    name:'TodoList',
    props:{
        todoList:Array as PropType<ITodo[]>
    },
    components:{
        TodoItem
    },
    setup(props){
        const {removeTodo,setStatus,setDoing} = useTodo()
        return {
            removeTodo,
            setStatus,
            setDoing
        }
    }
})
</script>

<style>

</style>