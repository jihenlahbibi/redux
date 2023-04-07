import { EyeTwoTone } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Add } from '../app/TaskSlice';
const AddTask = () => {
 const dispatch= useDispatch()
const [value,setValue]=useState({d:"",description:"",deadline:""})

const HandelChange=(event)=>{
    setValue({...value,[event.target.name]:event.target.value})
}
const handeladd=()=>{
    dispatch(Add(value))
}
//   const [passwordVisible, setPasswordVisible] = React.useState(false);
  return (
    <Space direction="vertical">
      <Input.Password placeholder="id"  name="id"  onChange={HandelChange}/>
      <Input.Password placeholder="description" name="description" onChange={HandelChange}/>
      <Space direction="horizontal">
        <Input.Password  placeholder="deadline" name="deadline"
        // visibilityToggle={{
        //     visible: passwordVisible,
        //     onVisibleChange: setPasswordVisible,
        //   }}
          onChange={HandelChange} />
        <Button style={{ width: 80,}} onClick={handeladd}> Add</Button>
      </Space>
    </Space>
  );
};
export default AddTask;