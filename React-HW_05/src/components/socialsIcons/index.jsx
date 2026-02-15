import styles from './styles.module.css';
import { socialsIconsList } from '../../data/socials';

function Socials() {
  return (
    <div className={styles.socials}>
      {socialsIconsList.map(({ id, url, Icon }) => (
        <a key={id} href={url}>
          <Icon className={styles.logoSvg} />
        </a>
      ))}
    </div>
  );
}

export default Socials;
