import { Input } from 'antd';
import { useState } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { Filtre } from '../app/TaskSlice';
const { TextArea } = Input;

const FiltreTask = () => {
  const list=useSelector (state=>state.Tasks.tasks);
  console.log(list)
const [tache,setTache]=useState("");
console.log(tache);
const dispatch=useDispatch();
const Search=()=>{
     dispatch(Filtre(Number(tache)))
}
  return(
  <div>
  <Input  onChange={(event)=>setTache(event.target.value)}/>
 <button onClick={()=>Search()}>search</button>
  </div> 
)} 
;
export default FiltreTask;