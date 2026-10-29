import { useState } from 'react'

export default function App() {
  const [theme, setTheme] = useState('night')

  function toggleTheme() {
    setTheme(theme === 'night' ? 'day' : 'night')
  }

  return (
    <div className={`app ${theme}`}>
      <main className="page">
        <p className="lbl">STEPH OS · BUILD 001</p>
        <h1 className="disp hello">
          Hi, I'm <span className="gold">Steph.</span>
        </h1>
        <p className="es">hola, soy steph · bienvenidos</p>

        <div className="glass card">This is a glass card.</div>

        <button className="btn btn-neu" onClick={toggleTheme}>
          Switch to {theme === 'night' ? 'day' : 'night'}
        </button>
      </main>
    </div>
  )
}