import { Player } from '@lottiefiles/react-lottie-player';


import React from 'react'

const LotAnimation = () => {
  return (
    <Player className='lot'
    autoplay
    loop
    src="https://assets2.lottiefiles.com/packages/lf20_xRmNN8.json"
    style={{ height: '300px', width: '300px' }}
  >
    
  </Player>
  )
}

export default LotAnimation