import React from 'react';
import { Input } from 'antd';
const {TextArea} = Input;

const Note: React.FC = () =>
 <Input placeholder="Borderless" bordered={false} />;
 <TextArea
 showCount
 maxLength={100}
 bordered={false}
 placeholder="disable resize"
 style={{ height: 120, resize: 'none' }}
/>
export default Note;
