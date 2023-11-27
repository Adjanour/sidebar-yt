import React from 'react';
import { Input } from 'antd';


const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  console.log(e);
};
type prop ={
  placeholder:string;
}

const InputField: React.FC<prop> = ({placeholder}) => (
  
    <Input placeholder={placeholder} allowClear  />

);

export default InputField;
