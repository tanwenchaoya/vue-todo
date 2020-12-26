<template>
  <div>
      <input
        type='text'
        v-model="todoValue"
        @keyup="setTodoValue"
      />
  </div>
</template>

<script lang='ts'>
import { defineComponent,ref } from "vue";
import {useTodo} from '../../hooks'
export default defineComponent({
    name:'TodoInput',
    setup(){
      const todoValue  = ref<string>('');
      const {setTodo} = useTodo()
      const setTodoValue = (e:KeyboardEvent)=>{
        if(e.keyCode === 13 && todoValue.value.trim().length){
          setTodo(todoValue.value)
          todoValue.value = ''
        }
      }

      return {
        todoValue,
        setTodoValue
      }
    }
})
</script>

<style>

</style>