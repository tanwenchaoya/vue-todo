<template>
  <div>
    <TodoInput></TodoInput>
    <TodoList :todoList = "todoList"></TodoList>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import TodoInput from '@/components/TodoInput/index.vue'
import TodoList from '@/components/TodoList/index.vue'
import { useTodo } from './hooks';
import { Store, useStore } from 'vuex';
export default defineComponent({
  name: 'App',
  components: {
    TodoInput,
    TodoList
  },
  setup(){
    const {setTodoList} = useTodo();
    const store:Store<any> = useStore()
    onMounted(()=>{
      setTodoList()
    });
    return{
      todoList:computed(()=> store.state.list)
    }
  }
});
</script>

<style lang="scss">

</style>
