import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Ullamco labore excepteur incididunt</h1>
          <p className={styles.desc}>
            Ullamco occaecat aliqua sint aliqua labore velit enim tempor
            occaecat id magna eiusmod. Ut culpa do dolore et quis. Eiusmod irure
            incididunt ea Lorem et ut consequat anim eu aute nostrud
            reprehenderit reprehenderit ex. Duis dolor ut ad in non. Ullamco
            laborum veniam culpa commodo qui quis pariatur excepteur laborum
            deserunt cillum aliquip duis magna. Enim quis anim tempor mollit
            mollit magna ipsum aliquip ipsum eiusmod nisi enim.
          </p>
          <div className={styles.author}>
            <Image
              src=""
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Aute sint consectetur id exercitation enim deserunt sint commodo anim
          et esse labore eu ex. Velit velit ex pariatur labore sit dolor
          occaecat irure. Dolor adipisicing irure est ullamco ea exercitation
          sint fugiat esse amet qui consequat. Eiusmod id dolor aliquip non.
          Fugiat nostrud cupidatat eiusmod quis ex eu amet occaecat. Deserunt
          voluptate ut et aliquip. Fugiat nostrud magna laboris quis proident
          culpa ea amet nostrud irure anim consequat sint.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
