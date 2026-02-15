import styles from './styles.module.css';

function Subtitle() {
  return (
    <div className={styles.subtitleInner}>
      <h3 className={styles.subtitle}> 
        Sign in <br /> with
      </h3>
    </div>
  );
}

export default Subtitle;
