import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h3>Choose a gallery</h3>
    <div className={styles.items}>
      <Link href="/portfolio/illustrations" className={styles.item}>
        <span className={styles.title}>Illustrations</span>
      </Link>
      <Link href="/portfolio/websites" className={styles.item}>
        <span className={styles.title}>Websites</span>
      </Link>
      <Link href="/portfolio/applications" className={styles.item}>
        <span className={styles.title}>Applications</span>
      </Link>
    </div>
    </div>
  )
}

export default Portfolio