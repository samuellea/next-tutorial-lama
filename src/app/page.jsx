import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'; // if import images this way, don't have to write width and height

export default function Home() {
  return (
    <div>
      <div className={styles.texts}>
        <h1>Better design for your digital products.</h1>
        <p>Turning your Idea into Reality. We bring together the teams from the global tech indsutry.</p>
        </div>
      <div className={styles.imgContainer}>
      <Image src={Hero} alt="Lama Dev Hero" className={styles.img}/>
      </div>
    </div> 
  )
}
