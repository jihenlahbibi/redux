import {createSlice} from '@reduxjs/toolkit'

const TaskSlice = createSlice ({
 name:"tasks",
initialState:{
    tasks:[
        {id:1,
        description:"this is the first task",
        isDone: true

    }]
},
reducers:{
Add:(state,action)=>{
state.tasks.unshift(action.payload)
},
Filtre:(state,action)=>{
   state.tasks = state.tasks.filter((el)=> el.id === action.payload)
 
},
Replace:(state,action)=>{
    state.tasks.description = action.payload
  
}

}


})
 export const{Add,Filtre,Replace}= TaskSlice.actions;
 export default TaskSlice.reducer