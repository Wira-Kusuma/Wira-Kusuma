import './index.css'

export default function App() {

  return (
    <>
    <Header />
    </>
  )
}

function Header() {
  return(
    <header>
      <h1>Wira</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skill">skill</a></li>
          <li><a href="#project">project</a></li>
        </ul>
      </nav>
    </header>
  )
}