import React from 'react'
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/Button/Button';

const About = () => {
  return (
    <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image 
      src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg" 
      fill={true} 
      alt=""
      className={styles.img}
      />
      <div className={styles.imgText}>
        <h1 className={styles.imgTitle}>Digital Storytellers</h1>
        <h2 className={styles.imgDescription}>Handcrafting award winning digital experiences</h2>
      </div>
    </div>
    <div className={styles.textContainer}>
    <div className={styles.item}>
        <h1 className={styles.title}>Who Are We?</h1>
        <p className={styles.description}>Reprehenderit amet mollit minim occaecat est ad sit quis non non irure ut. Commodo ad id incididunt deserunt ut. Cupidatat ad mollit nulla eiusmod. Veniam amet velit pariatur proident. Elit sunt adipisicing irure laborum cillum amet velit laborum duis et tempor ullamco nisi. 
          <br/>
          Aute consectetur laborum id do fugiat laborum fugiat ullamco reprehenderit do excepteur ullamco excepteur. Esse culpa magna dolore commodo sit laborum qui occaecat amet veniam ipsum culpa aliqua irure.
          </p>
        </div>
        <div className={styles.item}>
        <h1 className={styles.title}>What We Do</h1>
        <p className={styles.description}>Reprehenderit amet mollit minim occaecat est ad sit quis non non irure ut. Commodo ad id incididunt deserunt ut. Cupidatat ad mollit nulla eiusmod. Veniam amet velit pariatur proident. Elit sunt adipisicing irure laborum cillum amet velit laborum duis et tempor ullamco nisi. 
        <br/>
        <br/>
        - One
        <br/>
        <br/>
        - Two
        <br/>
        <br/>
        - Three
          </p>
          <Button url="contact" text="Contact"/>
        </div>
      </div>
    </div>
  )
}
 
export default About