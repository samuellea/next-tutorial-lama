import React from 'react';
import styles from './page.module.css';
import Button from '@/components/Button/Button';
import Image from 'next/image';

const Category = ({ params }) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>
            In sit quis eu qui qui. Labore nisi laboris tempor ea tempor sunt
            magna dolor sunt. Sit labore esse ipsum duis qui. Officia enim do
            occaecat velit commodo eu non aliqua esse cillum pariatur. Laborum
            aliquip magna pariatur sint. Irure nulla Lorem minim minim quis
            magna adipisicing.
          </p>
          <Button text="See More" url="" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg"
            alt=""
          />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Minimal Single Product</h1>
          <p className={styles.description}>
            In sit quis eu qui qui. Labore nisi laboris tempor ea tempor sunt
            magna dolor sunt. Sit labore esse ipsum duis qui. Officia enim do
            occaecat velit commodo eu non aliqua esse cillum pariatur. Laborum
            aliquip magna pariatur sint. Irure nulla Lorem minim minim quis
            magna adipisicing.
          </p>
          <Button text="See More" url="" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
