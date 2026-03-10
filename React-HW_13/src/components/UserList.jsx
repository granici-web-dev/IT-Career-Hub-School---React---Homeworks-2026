import { connect } from 'react-redux';
import UserItem from './UserItem';

function UserList({ filteredUsers }) {
  return (
    <div className="border-2 border-slate-200 rounded-lg overflow-hidden">
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => <UserItem key={user.id} user={user} />)
      ) : (
        <p className="px-4 py-6 text-center text-slate-400 italic">Пользователи не найдены</p>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  filteredUsers: state.users.filter((user) =>
    user.name.toLowerCase().includes(state.filter.toLowerCase()),
  ),
});

export default connect(mapStateToProps)(UserList);
