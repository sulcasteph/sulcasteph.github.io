export default function BottomBar({ canGoBack, back, go }) {
  return (
    <nav className="glass bottombar" aria-label="Quick controls">
      <button className="btn btn-neu" onClick={back} disabled={!canGoBack}>‹ Back</button>
      <span className="lbl now">NOW PLAYING · coming soon</span>
      <button className="btn btn-acc" onClick={() => go('home')}>Home</button>
    </nav>
  )
}