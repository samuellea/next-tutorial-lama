import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'; // if import images this way, don't have to write width and height
import Button from '@/components/Button/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.description}>Turning your Idea into Reality. We bring together the teams from the global tech indsutry.</p>
        {/* <button className={styles.button}>See Our Works</button> */}
         <Button url="/portfolio" text="See Our Works"/>
        </div>
      <div className={styles.item}>
      <Image src={Hero} alt="Lama Dev Hero" className={styles.img}/>
      </div>
    </div> 
  )
}
