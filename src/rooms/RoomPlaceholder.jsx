import { ROOMS } from '../data/rooms'

export default function RoomPlaceholder({ id }) {
  const room = ROOMS.find((r) => r.id === id)
  const num = ROOMS.indexOf(room) + 1

  return (
    <section>
      <p className="lbl">ROOM 0{num}</p>
      <h1 className="disp room-title">
        {room.title} <span className="es">{room.es}</span>
      </h1>
      <div className="glass card">Under construction · en construcción</div>
    </section>
  )
}