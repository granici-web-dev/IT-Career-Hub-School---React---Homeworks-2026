import { useParams, useNavigate, useLocation } from 'react-router-dom';
import articles from '../data/articles';

/*
 *  Article — страница отдельной статьи.
 *
 *  Три ключевых хука react-router-dom:
 *
 *  useParams()
 *  ───────────
 *  Извлекает параметры из URL.
 *  Route path="/articles/:id"  +  URL "/articles/2"
 *  → useParams() вернёт { id: "2" } (строка!)
 *  Поэтому нужен Number(id) для сравнения с article.id (число).
 *
 *  useNavigate()
 *  ─────────────
 *  Возвращает функцию для программной навигации.
 *  navigate('/articles')  → перейти на страницу списка.
 *  navigate(-1)           → назад в истории браузера (как кнопка ←).
 *
 *  useLocation()
 *  ─────────────
 *  Возвращает объект текущего местоположения: { pathname, search, hash }.
 *  Используем pathname для отображения текущего пути на странице.
 */
function Article() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Ищем статью по id. Number() — потому что useParams отдаёт строку.
  const article = articles.find((a) => a.id === Number(id));

  // Если статья не найдена (например, /articles/999)
  if (!article) {
    return (
      <div className="py-16 px-6 text-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Статья не найдена</h1>
        <p className="text-slate-500 mb-6">Статьи с id {id} не существует.</p>
        <button
          onClick={() => navigate('/articles')}
          className="bg-indigo-500 text-white px-6 py-2.5 rounded-lg font-medium
                     transition-colors duration-200 hover:bg-indigo-600 cursor-pointer">
          К списку статей
        </button>
      </div>
    );
  }

  return (
    <div className="py-10 px-6 max-w-3xl mx-auto">
      <article className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">{article.title}</h1>
        <p className="text-slate-600 leading-relaxed text-lg mb-6">{article.content}</p>
        <p className="text-sm text-slate-400 mb-8">Текущий путь: {location.pathname}</p>

        {/*
          navigate(-1) — назад в истории.
          Если пользователь пришёл из списка → вернётся в список.
          Если вбил URL вручную → navigate(-1) может увести на другой сайт,
          поэтому в реальном проекте лучше navigate('/articles').
        */}
        <button
          onClick={() => navigate(-1)}
          className="bg-indigo-500 text-white px-6 py-2.5 rounded-lg font-medium
                     transition-colors duration-200 hover:bg-indigo-600 cursor-pointer">
          ← Назад
        </button>
      </article>
    </div>
  );
}

export default Article;
