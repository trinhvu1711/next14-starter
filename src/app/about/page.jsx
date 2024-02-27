import Image from "next/image"
import styles from './about.module.css'

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>About Agency</h2>
        <h1 className={styles.title}> We are a creative agency located in New York, USA.</h1>
        <p className={styles.desc}>
          We have a team of
          talented people who are passionate about creating great experiences
          and services. We help our clients to grow their businesses.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+ </h1>
            <p>Year Of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+ </h1>
            <p>Year Of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+ </h1>
            <p>Year Of Experience</p>
          </div>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About" width={500} height={500} />

      </div>

    </div>
  )
}

export default AboutPage