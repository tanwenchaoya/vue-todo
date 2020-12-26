interface ITodo{
    id:number;
    content:string;
    status:EStatus
}
enum EStatus{
    FINSIHED = 'finished',
    WILLDO = 'willdo',
    DOING = 'doing'
}
interface IState{
    list:ITodo[]
}
export{
    IState,
    ITodo,
    EStatus
}