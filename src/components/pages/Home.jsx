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
        <ul className='container__h1'>
          <li>Welcome to React Refresher </li>
          <li className='container__h2'><a href={link}>Learn React</a></li>
          <li>
          <div className='container__vids'>

          <iframe className='container__vid' width="560" height="315" src="https://www.youtube.com/embed/Vcyen7QxyBM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          </li>
        </ul>
        
      </div>

      <div className='container__page2 page--2'>
      <LotAnimation src="https://assets2.lottiefiles.com/packages/lf20_xRmNN8.json" />

      </div>
      </div>
       })}
    </div>
  )
}

export default Home
