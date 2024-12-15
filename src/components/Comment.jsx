export default function Comment({
  id,
  description,
  deleteComment,
  editComment,
}) {
  return (
    <div className="p-4 mb-4 bg-gray-100 border border-gray-200 rounded-lg shadow-md">
      <p className="text-gray-800">{description}</p>
      <div className="mt-4 flex space-x-4">
        <button
          onClick={() => editComment(id, prompt("Edita tu comentario:", description))}
          className="text-sm text-blue-600 hover:underline"
        >
          Editar
        </button>
        <button
          onClick={() => deleteComment(id)}
          className="text-sm text-red-600 hover:underline"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}