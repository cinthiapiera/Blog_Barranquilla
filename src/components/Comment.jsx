import { useState } from 'react'

export default function Comment({id, description, deleteComment, editComment}) {
  const [state, setState] = useState(false)
  const [change, setChange] = useState(description)

  return (
    <div>
      {state ? <textarea onChange={(e) => setChange(e.target.value)} value={change}></textarea> : <p>{description}</p>}
      <button onClick={() => deleteComment(id)}>Borrar</button>
      {state ? <button onClick={() => {
        editComment(id, change)
        setState(false)
        }}>Guardar</button>: <button onClick={() => setState(true)}>Editar</button>}
    </div>
  )
}