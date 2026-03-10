function UserItem({ user }) {
  return (
    <div
      className="px-4 py-3 border-b border-slate-100 last:border-b-0
                    text-slate-700 hover:bg-slate-50 transition-colors duration-150">
      {user.name}
    </div>
  );
}

export default UserItem;
