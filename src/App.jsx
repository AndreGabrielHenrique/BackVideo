import { useState } from 'react'
import EmConstrucao from './assets/SiteConstrucao.gif';
import './App.css'

function App() {
  return (
    <>
      <h1 className='nome'>Back Video</h1>
      <div className='aviso'>Em construção...</div>
      


      

      <img src={EmConstrucao} className='SiteConstrucao' />
    </>
  )
}

export default App
