import { Link } from 'react-router-dom';
import articles from '../data/articles';

/*
 *  ArticlesList — список всех статей.
 *
 *  Link to={`/articles/${article.id}`}
 *  ────────────────────────────────────
 *  Шаблонная строка формирует путь: /articles/1, /articles/2 и т.д.
 *  При клике React Router сопоставит этот путь с Route path="/articles/:id"
 *  и отрендерит компонент Article.
 */
function ArticlesList() {
  return (
    <div className="py-10 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">Статьи</h1>
      <div className="flex flex-col gap-4">
        {articles.map((article) => (
          <Link
            key={article.id}
            to={`/articles/${article.id}`}
            className="block p-5 bg-white rounded-xl shadow-sm border border-slate-100
                       transition-all duration-200
                       hover:shadow-md hover:border-indigo-200 hover:-translate-y-0.5">
            <h2 className="text-xl font-semibold text-slate-800 mb-1">{article.title}</h2>
            <p className="text-slate-500">{article.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ArticlesList;
