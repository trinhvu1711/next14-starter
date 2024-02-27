import Image from 'next/image'
import styles from './singlePostPage.module.css'

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="https://images.pexels.com/photos/19682307/pexels-photo-19682307/free-photo-of-hoa-mua-he-cay-b-i-v-n.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>title</h1>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, corporis? Amet consequatur at quae. Possimus voluptatem maxime neque quasi nam magnam dolore? Impedit accusantium explicabo fuga earum reprehenderit iure itaque.
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage