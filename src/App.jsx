import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Nabar from './components/navbar/Nabar';
import LotAnimation from './assets/loottie/LotAnimation';
import Home from './components/pages/Home';
import UseStates from './components/pages/UseStates';
import UseEffects from './components/pages/UseEffects';
import UseRefs from './components/pages/UseRefs';
import { useEffect, useState } from 'react';


function App() {
  const [loading, setLoading] =useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])


 

  return (<>
    {loading ? <div className='lt4'> 
    <div className='lt5'> <LotAnimation src='https://assets8.lottiefiles.com/packages/lf20_b88nh30c.json' /></div>
    </div>
  : <div className="App">
     <Nabar />
      <Routes>
     
    <Route exact path='/' element={< Home />}></Route>
    <Route exact path='/UseStates' element={< UseStates />}></Route>
    <Route exact path='/UseEffects' element={< UseEffects />}></Route>
    <Route exact path='/UseRefs' element={< UseRefs />}></Route>


</Routes>
<Footer />
</div>}

</> )
}

export default App
