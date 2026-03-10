import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ArticlesList from './components/ArticlesList';
import Article from './pages/Article';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="min-h-screen bg-linear-to-b from-indigo-50 to-pink-50">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
