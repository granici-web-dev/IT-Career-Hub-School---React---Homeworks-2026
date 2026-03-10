import { NavLink } from 'react-router-dom';

function Navbar() {
  const baseLinkClass = 'px-4 py-2 rounded-lg font-medium transition-colors duration-200';

  const getLinkClass = ({ isActive }) =>
    isActive
      ? `${baseLinkClass} bg-indigo-500 text-white`
      : `${baseLinkClass} text-slate-600 hover:bg-indigo-50 hover:text-indigo-600`;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-3xl mx-auto px-6 py-4 flex gap-2">
        <NavLink to="/" className={getLinkClass} end>
          Главная
        </NavLink>
        <NavLink to="/articles" className={getLinkClass}>
          Статьи
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
