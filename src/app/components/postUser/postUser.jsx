import { getUser } from '@/app/lib/data'
import styles from './postUser.module.css'

// const getData = async (userId) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   return res.json()
// }


const PostUser = async ({ userId }) => {
  // const user = await getData(userId);

  const user = await getUser(userId);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Author</div>
      <div className={styles.username}>{user.username}</div>
    </div>
  )
}

export default PostUser