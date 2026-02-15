import styles from './styles.module.css';

function UserCard({ user }) {
  return (
    <div className={styles.card}>
      <img
        className={styles.avatar}
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
      />

      <h2 className={styles.name}>
        {user.name.first} {user.name.last}
      </h2>

      <p className={styles.email}>Email: {user.email}</p>
      <p className={styles.phone}>Phone: {user.phone}</p>
    </div>
  );
}

export default UserCard;
