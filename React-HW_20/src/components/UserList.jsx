import { useSelector } from 'react-redux';

function UserList() {
  const { users } = useSelector((state) => state.user);

  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        );
      })}
    </ul>
  );
}

export default UserList;
