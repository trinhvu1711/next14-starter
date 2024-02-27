import Image from 'next/image'
import styles from './contact.module.css'

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/contact.png" alt="Contact" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder='Name and Surname' />
          <input type="text" placeholder='Email address' />
          <input type="text" placeholder='Phone number (Optional)' />
          <textarea placeholder='Your message' cols={30} rows={10}></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage