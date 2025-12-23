import { useState } from 'react'
import './index.css'

export default function App() {

  return (
    <>
    <Header />
    <Main />
    <About />
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
        <div>
          <p>Hi!, Im</p>
          <h1>
            Wira Kusuma Phandawa
          </h1>
          <button>Let's talk</button>
          <button>Show project</button>
        </div>
      </div>

      <div className='main2'>

      </div>
    </main>
  )
}

function About(){
  return(
    <section className='about' id='about'>
      <div className="about1">
        <h1>About Me</h1>
        <p>I am a Frontend Developer with a strong passion for building clean, responsive, and user-friendly web interfaces. I work with HTML, CSS, and JavaScript to transform designs into well-structured and maintainable code.</p>
        <p>I enjoy learning new technologies, improving my problem-solving skills, and paying close attention to UI details to deliver the best user experience. For me, coding is not just about making things work, but about creating efficient and scalable solutions.</p>
        <p>I enjoy learning new technologies, improving my problem-solving skills, and paying close attention to UI details to deliver the best user experience. For me, coding is not just about making things work, but about creating efficient and scalable solutions.</p>
      </div>
      <div className="about2">
        <img src="img/wira-removebg-preview.png" alt="portait of wira" />
      </div>
    </section>
  )
}