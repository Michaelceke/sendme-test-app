import React from 'react'
interface IProps{
   people:{ 
    name:string
    age:number
   url:string
    note?:string
}[]
}
// play_ground
const List:React.FC<IProps>=(props)=>{
    return (
        <div>
            I am a List
        </div>
    )
}


export default List