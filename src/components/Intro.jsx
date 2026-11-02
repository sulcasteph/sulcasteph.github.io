import { useState } from 'react'
import { INTRO, FACTS, SKILLS } from '../data/Intro'

export default function Intro({ go }) {
  const [voice, setVoice] = useState('pitch')

  return (
    <>
      <div className="hero">
        <div>
          <p className="lbl">STEPH OS · HOME</p>
          <h1 className="disp hello">Hi, I'm <span className="gold">Steph.</span></h1>
          <p className="es">hola, soy steph · bienvenidos</p>
          <p className="intro-text">{INTRO[voice]}</p>
          <p className="intro-open">Open to internships and entry-level roles in cybersecurity, IT, and software engineering.</p>

          <div className="hero-actions">
            <button className="btn btn-acc" onClick={() => go('lab')}>See my projects</button>
            <button className="btn btn-neu" onClick={() => go('resume')}>Read my résumé</button>
            <div className="hero-links">
                <a href="https://github.com/sulcasteph" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/stephaniesulca" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="mailto:stephaniesulca1203@gmail.com">Email me</a>
            </div>
          </div>
        </div>

        <aside className="glass id-card">
          <div className="voice" role="group" aria-label="Choose how I introduce myself">
            <button className={`tab ${voice === 'pitch' ? 'on' : ''}`} aria-pressed={voice === 'pitch'} onClick={() => setVoice('pitch')}>
              About me
            </button>
            <button className={`tab ${voice === 'real' ? 'on' : ''}`} aria-pressed={voice === 'real'} onClick={() => setVoice('real')}>
              Acerca de mí
            </button>
          </div>

          <dl className="facts">
            {FACTS.map((f) => (
              <div key={f.label} className="fact">
                <dt className="lbl">{f.label}</dt>
                <dd>{f[voice]}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      <h2 className="disp section-title">
        What I can do <span className="es">lo que peudo hacer</span>
      </h2>
      <div className="neu-in rack">
        {SKILLS.map((s) => (
          <article key={s.verb} className="unit">
            <span className="led" aria-hidden="true" />
            <div>
              <h3 className="disp unit-verb">{s.verb}</h3>
              <span className="es unit-es">{s.es}</span>
            </div>
            <p className="unit-proof">{s.proof}</p>
            <p className="lbl unit-tools">{s.tools}</p>
          </article>
        ))}
      </div>
    </>
  )
}