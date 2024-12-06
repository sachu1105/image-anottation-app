
function AnnotationList({ annotations, onDeleteAnnotation }) {
  return (
    <div className="mt-4">
      <h2 className="font-semibold mb-2">Annotations:</h2>
      {annotations.map((annotation, index) => (
        <div key={index} className="flex items-center space-x-2">
          <span>{annotation.type}</span>
          <button
            onClick={() => onDeleteAnnotation(index)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default AnnotationList;
