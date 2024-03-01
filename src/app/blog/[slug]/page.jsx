import Image from 'next/image'
import styles from './singlePostPage.module.css'
import PostUser from '@/app/components/postUser/postUser';
import { Suspense } from 'react';
import { getPost, getUser } from '@/app/lib/data';

// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   return res.json()
// }



const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  // const post = await getData(slug);
  const post = await getPost(slug);
  const user = await getUser(post.userId);
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={post.img} alt="image" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image src={user.img ? user.img : "/noavatar.png"} alt="image" className={styles.avatar} width={50} height={50} />
          {/* <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Trinh Long Vu</span>
          </div> */}
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{post.createdAt.toString().slice(4, 16)}</span>
          </div>
        </div>
        <div className={styles.content}>
          <p>{post.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage