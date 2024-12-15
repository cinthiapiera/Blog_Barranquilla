export default function CommentForm({ text, setText, saveComment }) {
  return (
    <div className="flex flex-col items-start space-y-4 bg-gray-50 p-6 rounded-lg shadow-md">
      <textarea
        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="4"
        value={text}
        onChange={setText}
        placeholder="Escribe tu comentario aquí..."
      ></textarea>
      <button
        onClick={saveComment}
        className="px-6 py-2 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700"
      >
        Enviar
      </button>
    </div>
  );
}