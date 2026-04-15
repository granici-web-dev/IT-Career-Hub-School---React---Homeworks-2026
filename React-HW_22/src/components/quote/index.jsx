import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchQuote } from '../../redux/slices/quoteSlice';
import styles from './styles.module.css'

function Quote() {
  const dispatch = useDispatch();
  const { data, isLoading, isError, message } = useSelector((state) => state.quote);

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

   if (isLoading) return <p>Loading...</p>;
   if (isError) return <p>Error: {message}</p>;
   if (!data) return null;

  return (
    <div className={styles.container}>
      <h1>Random Quote Generator</h1>
      <blockquote>"{data.quote}"</blockquote>
      <p style={{ textAlign: 'right' }}>- {data.author}</p>
      <button className={styles.btn} onClick={() => dispatch(fetchQuote())}>
        New Quote
      </button>
    </div>
  );
}

export default Quote;
