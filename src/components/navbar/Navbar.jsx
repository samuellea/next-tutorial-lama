"use client"
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css';

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 1,
    title: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 1,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 1,
    title: 'About',
    url: '/about',
  },
  {
    id: 1,
    title: 'Contact',
    url: '/contact',
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>lamamia</Link>
      <div className={styles.links}>
        {
          links.map(link => (
            <Link href={link.url} key={link.id} className={styles.link}>{link.title}</Link>
          ))
        }
<button className={styles.logout} onClick={()=>{console.log("logged out!")}}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar