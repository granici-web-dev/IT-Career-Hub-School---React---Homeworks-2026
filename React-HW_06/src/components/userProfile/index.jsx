import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from './styles.module.css'
import UserCard from '../userCard';

function UserProfile() {
  const BASE_URL = 'https://randomuser.me/api/0.8';

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getUser = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get(BASE_URL);
      setUser(response.data.results[0].user);  
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getUser();
  }, [])

  return (
    <div className={styles.flexBox}>
      {isLoading && <h1>Loading...</h1>}
      {user && <UserCard user={user} />}
      <button className={styles.button} onClick={getUser}>Load New User</button>
    </div>
  );
}

export default UserProfile;
