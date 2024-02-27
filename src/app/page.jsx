import styles from './home.module.css';
import Image from 'next/image';

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Create Thoughts Agency.</h1>
      <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere quasi fugiat explicabo neque corporis veritatis esse vel repudiandae cum quae debitis voluptatum, aliquam porro eaque eveniet totam? Laboriosam, culpa cum?</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn more</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt="brand" fill className={styles.brandImg} />
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/hero.gif" alt="hero" fill className={styles.heroImg} />
    </div>

  </div>;
};

export default Home;