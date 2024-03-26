import { useState } from 'react'

export default function Comment({id, description, deleteComment, editComment}) {
  const [state, setState] = useState(false)
  const [change, setChange] = useState(description)

  return (
    <div className='flex flex-col gap-4 p-4 rounded-2xl border-2 border-slate-700 border-solid'>
      {state ? 
        <textarea 
          onChange={(e) => setChange(e.target.value)} 
          value={change}
          className='h-32 p-4 rounded-2xl border-2 border-slate-700 border-solid text-lg resize-none'
          ></textarea> : 
        <p className='text-lg max-w-72 break-words'>{description}</p>}
      <button 
        onClick={() => deleteComment(id)}
        className='rounded-2xl px-1 py-2 self-end bg-slate-400 text-lg active:scale-90'
        >Borrar</button>
      {state ? <button 
        onClick={() => {
          editComment(id, change)
          setState(false)
          }}
        className='rounded-2xl px-1 py-2 self-end bg-slate-400 text-lg active:scale-90'
        >Guardar</button> : 
        <button 
          onClick={() => setState(true)}
          className='rounded-2xl px-1 py-2 self-end bg-slate-400 text-lg active:scale-90'
          >Editar</button>}
    </div>
  )
}