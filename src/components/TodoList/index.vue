<template>
  <div>
      list
      <todo-item></todo-item>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import TodoItem from './TodoItem.vue'
export default defineComponent({
    name:'TodoList',
    components:{
        TodoItem
    }
})
</script>

<style>

</style>