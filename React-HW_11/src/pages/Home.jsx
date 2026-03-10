import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center py-16 px-6">
      <h1 className="text-4xl font-bold text-slate-800 mb-4">Добро пожаловать в блог</h1>
      <p className="text-lg text-slate-500 mb-8 max-w-md mx-auto">
        Здесь вы найдёте статьи о React, маршрутизации, хуках и управлении состоянием.
      </p>
      <Link
        to="/articles"
        className="inline-block bg-indigo-500 text-white px-8 py-3 rounded-xl
                   font-medium transition-all duration-300
                   hover:bg-indigo-600 hover:-translate-y-0.5 hover:shadow-lg">
        Читать статьи →
      </Link>
    </div>
  );
}

export default Home;
