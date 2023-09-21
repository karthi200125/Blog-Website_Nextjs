"use client"
import React from 'react';
import styles from './category.module.css';
import Button from '@/Components/Button/Button';
import Image from 'next/image';
import { items } from './data.js';

const getdata = (cat) => {
  const data = items[cat]; 
  return data || []; 
};

const Category = ({ params }) => {
  const data = getdata(params.category); 
  
  return (
    <div className={styles.category}>
      <h1 className={styles.title}>{params.category}</h1>
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <Button text='See more' url='' />
          </div>
          <div className={styles.imgcon}>
            <Image
              alt={item.title}
              src={item.image}
              className={styles.img}
              width={300}
              height={400}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
