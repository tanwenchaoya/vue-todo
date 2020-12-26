import { EStatus, IState, ITodo } from '@/typings';
import { REMOVE_TODO, SET_TODO, SET_TODO_LIST,SET_TODO_STATUS,SET_DOING_STATUS } from './actionTypes';

export default {
    [SET_TODO](state:IState,todo:ITodo):void{
        state.list = [todo,...state.list]
        // state.list.unshift(todo)
    },
    [SET_TODO_LIST](state:IState,todoList:ITodo[]):void{
        state.list = todoList
    },
    [REMOVE_TODO](state:IState,id:number):void{
        state.list = state.list.filter((item)=>item.id!==id)
    },
    [SET_TODO_STATUS](state:IState,id:number):void{
        state.list = state.list.map((item)=>{
            if(item.id === id){
                switch (item.status){
                    case EStatus.FINSIHED:
                        item.status = EStatus.WILLDO
                        break
                    case EStatus.WILLDO:
                    case EStatus.DOING:
                        item.status = EStatus.FINSIHED
                        break
                    default:
                        break
                }
            }
            return item
        })
        
    },
    [SET_DOING_STATUS](state:IState,id:number){
        state.list =state.list.map((item:ITodo)=>{
            if(item.id !== id){
                if(item.status === EStatus.DOING){
                    item.status = EStatus.WILLDO
                }
            }else{
                if(item.status === EStatus.WILLDO){
                    item.status = EStatus.DOING
                }else{
                    item.status = EStatus.WILLDO
                }
            }
            return item
        })
    }
}