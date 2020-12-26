import { SET_TODO, SET_TODO_LIST,REMOVE_TODO,SET_TODO_STATUS,SET_DOING_STATUS } from '@/store/actionTypes'
import { EStatus, ITodo } from '@/typings'
import { watch } from 'vue'
import { Store, useStore } from 'vuex'

interface IUseLocalStorage{
    getLocalList:()=> ITodo[];
    setLocalList:(todoList:ITodo[])=>void
}
function useTodo(){
    const store:Store<any> = useStore()
    const {setLocalList,getLocalList}:IUseLocalStorage = useLocalStorage()
    watch(()=>{
        return store.state.list
    },(todoList:ITodo[])=>{
        setLocalList(todoList)
    })
    function setTodo(value:string):void{
        const todo:ITodo = {
            id:new Date().getTime(),
            content:value,
            status:EStatus.WILLDO
        }
        store.dispatch(SET_TODO,todo)
    }
    function setTodoList():void{
        store.dispatch(SET_TODO_LIST,getLocalList())
    }

    function removeTodo(id:number):void{
        store.dispatch(REMOVE_TODO,id)
    }

    function setStatus(id:number){
        store.dispatch(SET_TODO_STATUS,id)
    }

    function setDoing(id:number){
        store.dispatch(SET_DOING_STATUS,id)
    }

    return {
        setTodo,
        removeTodo,
        setStatus,
        setDoing,
        setTodoList
    }
}

function useLocalStorage():IUseLocalStorage{
    function getLocalList():ITodo[]{
        return JSON.parse(localStorage.getItem('todoList') || '[]')
    }
    function setLocalList(todoList:ITodo[]){
        localStorage.setItem('todoList',JSON.stringify(todoList))
    }

    return{
        getLocalList,
        setLocalList
    }
}
export {
    useTodo
} 