import { Button, Card, Space } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Replace } from '../app/TaskSlice';

const Task = ({task}) =>{
 const dispatch=useDispatch()
const handEdit=()=>{
  dispatch(Replace(text))
}
 const[text,setText]=useState(false)
 
  const handl =()=>{
    setText(!text)
  };
 return(
  <Space direction="vertical" size={16}>
    <Card
      title={task.id}
      extra={<a href="#">More</a>}
      style={{
        width: 300,
      }}
    >
      <p>{task.description}</p>
      
    </Card>
    <Card
      size="small"
      title="deadline le..."
      extra={<a href="#">More</a>}
      style={{
        width: 300,
      }}>
      <p>{task.isDone}</p>
     <button onClick={()=>handl()}>Edit</button>
     {text &&<div><input type='text' placeholder='modifier la tache' onChange={(event)=>setText(event.target.value)}/>
     <button onChange={handEdit}>Save</button></div>}
     
    </Card>
  </Space>
 )
  
};
export default Task;