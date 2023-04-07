import { useSelector } from "react-redux";
import Task from "./Task";


const ListTask =()=>{
const list=useSelector (state=>state.Tasks.tasks);
console.log(list);
return (
       <div>{list.map((el,index)=>{
        return (
          <div >
        <Task   task={el}/>
        </div>
        )
       })}

     </div>



)}

export default ListTask;

