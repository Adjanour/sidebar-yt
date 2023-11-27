// import { User } from '@/lib/definitions';
// import { useEffect, useState, FC, ChangeEvent } from 'react';
// import { Select, Spin } from 'antd';
// import { Status } from '@/lib/definitions';
// const { Option } = Select;


// interface UsersSelectProps {
//   onChange?: (value: string) => void;
//   placeholder?: string;
//   endpoint?: string;
// }

// type prop = {
//     option:string[];
//     placeholder?:string;
//     endpoint?:string;
// }

// const TokenEdit: React.FC<UsersSelectProps> = ({onChange,placeholder,endpoint}) => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [fetching, setFetching] = useState(true);
//   const [selectedItems, setSelectedItems] = useState<string[]>([]);
//   const filteredOptions = users.filter((o) => !selectedItems.includes(o.first_name));


//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/api/user/${endpoint}/`); // Replace with your actual API endpoint
//         const data = await response.json();
//         setUsers(data); // Assuming the API returns an array of task statuses
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       } finally {
//         setFetching(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleUserChange = (value: string) => {
//     if (onChange) {
//       onChange(value);
//     }
//   };
//   return (
//     <Select
//       mode="multiple"
//       placeholder={placeholder || 'Select users'}
//       // value={selectedItems}
//       notFoundContent={fetching ? <Spin size="small" /> : null}
//       onChange={handleUserChange}
//       style={{ width: '100%' }}
//       options={users.map((item) => ({
//         value: item.Id,
//         label: `${item.first_name} ${item.last_name}`,
//       }))}
//     />
      
//   );
// };

// export default TokenEdit;

import { User } from '@/lib/definitions';
import { useEffect, useState, FC } from 'react';
import { Select, Spin } from 'antd';

const { Option } = Select;

interface UsersSelectProps {
  onChange?: (value: number) => void;
  placeholder?: string;
  endpoint?: string;
}

const TokenEdit: FC<UsersSelectProps> = ({ onChange, placeholder, endpoint }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/user/${endpoint}/`);
        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setFetching(false);
      }
    };

    fetchUsers();
  }, [endpoint]);

  const handleStatusChange = (value: number) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Select
    mode='multiple'
      showSearch
      style={{ width: '100%' }}
      placeholder={placeholder || 'Select users'}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      onChange={handleStatusChange}
      // filterOption={(input, option) =>
      //   option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      // }
    >
      {users?.map((user) => (
        <Option key={user.id} value={user.id}>
          {`${user.first_name} ${user.last_name}`}
        </Option>
      ))}
    </Select>
  );
};

export default TokenEdit;
