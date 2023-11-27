// import {useEffect, useState } from 'react';
// // import debounce from 'lodash/debounce';
// // import { Select, Spin } from 'antd';
// // import type { SelectProps } from 'antd/es/select';

// // export interface DebounceSelectProps<ValueType = any>
// //   extends Omit<SelectProps<ValueType | ValueType[]>, 'options' | 'children'> {
// //   fetchOptions: (search: string) => Promise<ValueType[]>;
// //   debounceTimeout?: number;
// // }

// // function DebounceSelect<
// //   ValueType extends { key?: string; label: React.ReactNode; value: string | number } = any,
// // >({ fetchOptions, debounceTimeout = 800, ...props }: DebounceSelectProps<ValueType>) {
// //   const [fetching, setFetching] = useState(false);
// //   const [options, setOptions] = useState<ValueType[]>([]);
// //   const fetchRef = useRef(0);

// //   const debounceFetcher = useMemo(() => {
// //     const loadOptions = (value: string) => {
// //       fetchRef.current += 1;
// //       const fetchId = fetchRef.current;
// //       setOptions([]);
// //       setFetching(true);

// //       fetchOptions(value).then((newOptions) => {
// //         if (fetchId !== fetchRef.current) {
// //           // for fetch callback order
// //           return;
// //         }

// //         setOptions(newOptions);
// //         setFetching(false);
// //       });
// //     };

// //     return debounce(loadOptions, debounceTimeout);
// //   }, [fetchOptions, debounceTimeout]);

// //   return (
// //     <Select
// //       labelInValue
// //       filterOption={false}
// //       onSearch={debounceFetcher}
// //       notFoundContent={fetching ? <Spin size="small" /> : null}
// //       {...props}
// //       options={options}
// //     />
// //   );
// // }

// // // Usage of DebounceSelect
// // interface UserValue {
// //   label: string;
// //   value: string;
// // }
// // type prop ={
// //   first_name:string;
// //   last_name:string;
// //   username:string;
// //   id:number;
// // }

// // async function fetchUserList(username: string): Promise<UserValue[]> {
// //   console.log('fetching user', username);

// //   return fetch('http://127.0.0.1:8000/api/user/users/')
// //     .then((response) => response.json())
// //     .then((body) =>
// //       body.map(
// //         ( {first_name,last_name , username,id }:prop ) => ({
// //           label: `${first_name} ${last_name}`,
// //           value: id,
// //         }),
// //       ),
// //     );
// // }

// // const SelectComponent: React.FC = () => {
// //   const [value, setValue] = useState<UserValue[]>([]);

// //   return (
// //     <DebounceSelect
// //       mode='multiple'
// //       value={value}
// //       placeholder="Select users"
// //       fetchOptions={fetchUserList}
// //       onChange={(newValue) => {
// //         setValue(newValue as UserValue[]);
// //       }}
// //       style={{ width: '100%' }}
// //     />
// //   );
// // };

// // export default SelectComponent;

// import React from 'react';
// import type { SelectProps } from 'antd';
// import { Select, Space,Spin } from 'antd';
// import { getStatus } from '@/lib/data';
// import { Status } from '@/lib/definitions';

// const handleChange = (value: string[]) => {
//   console.log(`selected ${value}`);
// };
// interface Value {
//   label: string;
//   value: string;
// }

// async function fetchStatus(): Promise<Value[]> {
//     // const satus = await getStatus();
//     // console.log(satus);
    
//     return fetch('http://127.0.0.1:8000/api/user/users/')
//       .then((response) => response.json())
//       .then((body) =>
//         body.map(
//           ( {statusId,statusName }:Status ) => ({
//             label: `${statusName}`,
//             value: statusId,
//           }),
    
//         ),
//       );
//   }

// const options: SelectProps['options'] = [
//   {
//     label: 'China',
//     value: 'china',
//     emoji: '🇨🇳',
//     desc: 'China (中国)',
//   },
//   {
//     label: 'USA',
//     value: 'usa',
//     emoji: '🇺🇸',
//     desc: 'USA (美国)',
//   },
//   {
//     label: 'Japan',
//     value: 'japan',
//     emoji: '🇯🇵',
//     desc: 'Japan (日本)',
//   },
//   {
//     label: 'Korea',
//     value: 'korea',
//     emoji: '🇰🇷',
//     desc: 'Korea (韩国)',
//   },
// ];

// type prop ={
//   placeholder:string;
// }

// const SelectComponent: React.FC<prop> = ({placeholder}) => {
//   const [status, setStatus] = React.useState<Value[]>([]);
//   const [fetching, setFetching] = useState(true);
//   const [options, setOptions] = useState<Value[]>([]);
//   useEffect(()=>{
//     fetchStatus().then((newOptions) => {setOptions(newOptions);});
//     status !==null && setFetching(false);
//   },[])
 
//   return(<Select
//     mode="multiple"
//     style={{ width: '100%' }}
//     placeholder={placeholder}
//     defaultValue={['china']}
//     onChange={handleChange}
//     notFoundContent={fetching ? <Spin size="small" /> : null}
//     optionLabelProp="statusName"
//     options={options}
//     // optionRender={(option) => (
//     //   <Space>
//     //     <span role="img" aria-label={option.data.label}>
//     //       {option.data.emoji}
//     //     </span>
//     //     {option.data.desc}
//     //   </Space>
//     // )}
//   />)
//     };

// export default SelectComponent;

// components/TaskStatusSelect.js
// components/TaskStatusSelect.tsx

// components/TaskStatusSelect.tsx
import { useEffect, useState, FC, ChangeEvent } from 'react';
import { Select, Spin } from 'antd';
import { Status } from '@/lib/definitions';
const { Option } = Select;

interface TaskStatus extends Status {
  
  // Add other properties based on your API response
}

interface TaskStatusSelectProps {
  onChange?: (value: number) => void;
  placeholder?: string;
  endpoint?: string;
}

const SelectComponent: FC<TaskStatusSelectProps> = ({ onChange, placeholder ,endpoint}) => {
  const [taskStatuses, setTaskStatuses] = useState<TaskStatus[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const fetchTaskStatuses = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/user/${endpoint}/`); // Replace with your actual API endpoint
        const data = await response.json();
        setTaskStatuses(data.results); // Assuming the API returns an array of task statuses
      } catch (error) {
        console.error('Error fetching task statuses:', error);
      } finally {
        setFetching(false);
      }
    };

    fetchTaskStatuses();
  }, []);

  const handleStatusChange = (value: number) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Select
      showSearch
      style={{ width: '100%' }}
      placeholder={placeholder || 'Select Task Status'}
      optionFilterProp="children"
      onChange={handleStatusChange}
      // filterOption={(input, option) =>
      //   option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      // }
      notFoundContent={fetching ? <Spin size="small" /> : null}
    >
      {taskStatuses.map((status) => (
        <Option key={status.statusId} value={status.statusId}>
          {status.statusName}
        </Option>
      ))}
    </Select>
  );
};

export default SelectComponent;
