import { useState } from 'react'
import './index.css'
import { useEffect } from 'react'

export default function App() {

  return (
    <>
    <Header />
    <Main />
    </>
  )
}

function Header() {

  const [showed, setShowed] = useState(false)

  return(
    <header>
      <h1>Wira</h1>
      <div className='burger-menu' onClick={()=>setShowed(!showed)} >
        &#8801;
      </div>
      <nav className={showed ? 'active' : ''} >
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skill">skill</a></li>
          <li><a href="#project">project</a></li>
        </ul>
      </nav>
    </header>
  )
}

function Main() {
  return(
    <main>
      <div className='main1'>
        <p>Hi!, Im</p>
        <h1>
          Wira Kusuma Phandawa
        </h1>
      </div>

      <div className='main2'>

      </div>
    </main>
  )
}