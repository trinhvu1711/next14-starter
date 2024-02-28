import PostCard from '../components/postCard/postCard'
import styles from './blog.module.css'

const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 36000 } })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
const BlogPage = async () => {
  const posts = await getData()

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