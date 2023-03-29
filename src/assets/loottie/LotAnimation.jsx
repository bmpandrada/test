import { Player } from '@lottiefiles/react-lottie-player';


import React from 'react'

const LotAnimation = ({src, style}) => {
  
  return (
    <Player className='lot'
    autoplay
    loop
    speed='.6'
    src={src}
    style={style || {width:'300px'}}
  >
    
  </Player>
  )
}

export default LotAnimation