import { ROOMS } from '../data/rooms'

export default function Home({ go }) {
  return (
    <section>
      <p className="lbl">STEPH OS · HOME</p>
      <h1 className="disp hello">Hi, I'm <span className="gold">Steph.</span></h1>
      <p className="es">hola, soy steph · bienvenidos</p>

      <h2 className="disp section-title">
        Pick a room <span className="es">elige un cuarto</span>
      </h2>
      <div className="tiles">
        {ROOMS.map((r, i) => (
          <button key={r.id} className="neu tile" onClick={() => go(r.id)}>
            <span className="lbl">0{i + 1}</span>
            <span className="disp tile-title">{r.title}</span>
            <span className="es tile-es">{r.es}</span>
            <span className="tile-hook">{r.hook} →</span>
          </button>
        ))}
      </div>
    </section>
  )
}