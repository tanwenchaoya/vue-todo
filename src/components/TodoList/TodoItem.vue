<template>
  <div>
      <input 
        type="checkbox"
        :checked="item.status === FINISHED"
        @click="setStatus(item.id)"
      />
      <span
        :class="item.status === FINISHED ? 'line-through' : ''"
      >
        {{item.content}}
      </span>
      <button 
        @click="removeTodo(item.id)"
      >
        删除
      </button>
      <button 
        v-if="item.status!== FINISHED"
        @click="setDoing(item.id)"
        :class="item.status === DOING ?'doing':'willdo'"
      >
        {{item.status === DOING ? '正在做':'马上做'}}
      </button>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from "vue";
import { EStatus, ITodo } from "../../typings";
export default defineComponent({
    name:'TodoItem',
    props: {
      item: Object as PropType<ITodo>
    },
    setup(props,{emit}){
      const statusState = {
        DOING : EStatus.DOING,
        FINISHED : EStatus.FINSIHED,
        WILLDO:EStatus.WILLDO
      }
      const removeTodo = (id:number)=>{
        console.log(id)
        emit('removeTodo',id)
      }
      const setStatus=(id:number)=>{
        emit('setStatus',id)
      }
      const setDoing = (id:number)=>{
        emit('setDoing',id)
      }
      return{
        ...statusState,
        removeTodo,
        setStatus,
        setDoing
      }
    }
})
</script>

<style>
.line-through{
  text-decoration: line-through;
}
.doing{
  background-color: #cdcdcd;
  color: #000;
}
.willdo{
  background-color: orange;
  color: white;
}
</style>