import React from 'react'
import state from '../imgs/useSTate.png'
import LotAnimation from '../../assets/loottie/LotAnimation';


const UseStates = () => {
  return (
    <div className='container'>
      
      <div className="container__pages">
        <div className='container__page1 page--1'>
          <div className='lt2'>
            <div className='lt3'>
            <LotAnimation src='https://assets8.lottiefiles.com/private_files/lf30_lrrsdnr5.json' />

            </div>
          </div>
      <img className='container__img' src={state} alt="" />
      </div>
      <div className='container__page2 page--2'>
      <div className='container__text'>
      <h2>UseState</h2>
      <p>useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default UseStates
