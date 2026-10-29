import { useState } from 'react'
import Blobs from './components/Blobs'
import TopBar from './components/TopBar'
import BottomBar from './components/BottomBar'
import Home from './rooms/Home'
import RoomPlaceholder from './rooms/RoomPlaceholder'

export default function App() {
  const [theme, setTheme] = useState('night')
  const [screen, setScreen] = useState('home')
  const [history, setHistory] = useState([])

  function go(id) {
    if (id === screen) return
    setHistory([...history, screen])
    setScreen(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function back() {
    if (history.length === 0) return
    setScreen(history[history.length - 1])
    setHistory(history.slice(0, -1))
  }

  function toggleTheme() {
    setTheme(theme === 'night' ? 'day' : 'night')
  }

  return (
    <div className={`app ${theme}`}>
      <Blobs />
      <TopBar screen={screen} go={go} theme={theme} toggleTheme={toggleTheme} />

      <main className="page" key={screen}>
        {screen === 'home' ? <Home go={go} /> : <RoomPlaceholder id={screen} />}
      </main>

      <BottomBar canGoBack={history.length > 0} back={back} go={go} />
    </div>
  )
}