import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ArticlesList from './components/ArticlesList';
import Article from './pages/Article';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-pink-50">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route
          path="*"
          element={
            <div className="py-16 text-center">
              <h1 className="text-3xl font-bold text-slate-800">404</h1>
              <p className="text-slate-500 mt-2">Страница не найдена</p>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
