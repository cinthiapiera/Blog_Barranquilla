export default function CommentForm({text, setText, saveComment}){
  return (
    <div className="flex flex-col justify-center items-center gap-2.5">
      <textarea
       onChange={setText} 
       value={text} 
       placeholder='Comenta aquí...'
       className="h-32 p-4 rounded-2xl border-2 border-slate-700 border-solid text-lg resize-none"
       ></textarea>
      <button 
        onClick={saveComment}
        className="w-fit py-2 px-4 rounded-2xl bg-slate-400 text-lg active:scale-90"
        >Crear</button>
    </div>
  )
}