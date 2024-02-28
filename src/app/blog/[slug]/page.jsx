import Image from 'next/image'
import styles from './singlePostPage.module.css'

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="https://images.pexels.com/photos/19682307/pexels-photo-19682307/free-photo-of-hoa-mua-he-cay-b-i-v-n.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image src="https://images.pexels.com/photos/19682307/pexels-photo-19682307/free-photo-of-hoa-mua-he-cay-b-i-v-n.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className={styles.avatar} width={50} height={50} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Trinh Long Vu</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          <p>{post.body}</p>
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage