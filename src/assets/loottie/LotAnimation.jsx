import { Player } from '@lottiefiles/react-lottie-player';


import React from 'react'

const LotAnimation = ({src}) => {
  
  return (
    <Player className='lotties'
    autoplay
    loop
    speed='.6'
    src={src}
    style={{ height: '300px', width: '300px' }}
  >
    
  </Player>
  )
}

export default LotAnimation