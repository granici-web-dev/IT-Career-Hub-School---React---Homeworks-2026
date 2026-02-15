import LogoImg from '../../assets/logos/spotify_logo.svg';
import styles from './styles.module.css';

function Logo() {
  return (
    <div className={styles.logo}>
      <a href="/">
        <img src={LogoImg} alt="Spotify logo" />
      </a>
    </div>
  );
}

export default Logo;