import React from 'react'
import Wallpaper from '../imgs/pexels-luis-gomes-546819.jpg'
import { useState } from 'react';
import { homeData } from '../../data/data';
import LotAnimation from '../../assets/loottie/LotAnimation';

const Home = () => {
  const [data] = useState(homeData)
  return (
    <div className='container'>
      {data.map(({id, link})=>{
     return <div className="container__pages" key={id}>
        
          
       
        <div className='container__page3 page--3'>
        <h1 > </h1>
        <ul className='container__h1'>
          <li>Welcome to React Refresher </li>
          <li><a href={link}>Learn React</a></li>
        </ul>
      </div>

      <div className='container__page2 page--2'>
      <LotAnimation />

      </div>
      </div>
       })}
    </div>
  )
}

export default Home
