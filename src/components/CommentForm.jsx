export default function CommentForm({text, setText, saveComment}){
  return (
    <div>
      <textarea onChange={setText} value={text} placeholder='Comenta aquí...'></textarea>
      <button onClick={saveComment}>Crear</button>
    </div>
  )
}