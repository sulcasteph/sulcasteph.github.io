import { ROOMS } from '../data/rooms'

const TABS = [{ id: 'home', tab: 'Home' }, ...ROOMS]
const SUN = 'M12 3v2 M12 19v2 M5 5l1.4 1.4 M17.6 17.6 19 19 M3 12h2 M19 12h2 M5 19l1.4-1.4 M17.6 6.4 19 5 M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z'
const MOON = 'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z'

export default function TopBar({ screen, go, theme, toggleTheme }) {
  return (
    <header className="topbar">
      <div className="glass topbar-inner">
        <button className="logo" onClick={() => go('home')}>
          steph<span className="gold">.</span>
        </button>

        <nav className="tabs" aria-label="Rooms">
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`tab ${screen === t.id ? 'on' : ''}`}
              aria-current={screen === t.id ? 'page' : undefined}
              onClick={() => go(t.id)}
            >
              {t.tab}
            </button>
          ))}
        </nav>

        <button className="btn-neu icon-btn" onClick={toggleTheme} aria-label="Toggle day and night">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d={theme === 'night' ? SUN : MOON} />
          </svg>
        </button>
      </div>
    </header>
  )
}