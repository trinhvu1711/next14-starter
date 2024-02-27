import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/19682307/pexels-photo-19682307/free-photo-of-hoa-mua-he-cay-b-i-v-n.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" fill className={styles.img} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>desc</p>
        <Link className={styles.link} href="/blog/post">READ ME</Link>
      </div>

    </div>
  )
}

export default PostCard