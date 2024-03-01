import PostCard from '../components/postCard/postCard'
import { getPosts } from '../lib/data'
import styles from './blog.module.css'


// FETCH DATA WITH API
// const getData = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 36000 } })
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   return res.json()
// }

// FETCH DATA WITH MONGODB
const data = await getPosts();

const BlogPage = async () => {
  const posts = data;

  return (
    <div className={styles.container}>
      {
        posts.map(post => (
          <div key={post.id} className={styles.post}>
            <PostCard post={post} />
          </div>
        ))
      }
    </div>
  )
}

export default BlogPage