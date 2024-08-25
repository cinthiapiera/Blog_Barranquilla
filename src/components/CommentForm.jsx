export default function CommentForm({text, setText, saveComment}){
  return (
    <div className="relative overflow-hidden bg-white shadow-md sm:rounded-lg p-4">
      <div className="flex flex-col text-center w-full">
        <h1 className="py-6 sm:text-3xl text-2xl font-medium title-font text-gray-900">Dejanos tu comentario</h1>
      </div>
      <div className="flex lg:w-2/3 w-full sm:flex-col flex-col mx-auto px-8 sm:space-x-0 sm:space-y-4 space-y-4 sm:px-0 items-center">
        {/* <div className="w-full">
          <label htmlFor="alias" className="block text-sm text-gray-600">Nombre o Alias</label>
          <input type="text" id="alias" name="alias" placeholder='Ingresa tu nombre o alias...' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out" />
        </div> */}
        <div className="w-full">
          <label htmlFor="comment" className="block text-sm text-gray-600">Comentario</label>
          <textarea onChange={setText} value={text} id="comment" name="comment" placeholder='Escribe aquí tu comentario...' className="w-full h-32 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <button onClick={saveComment} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Crear</button>
      </div>
    </div>
  )
}