
function AnnotationControls({ onAddAnnotation }) {
  return (
    <div className="flex mb-4 space-x-4">
      <button
        onClick={() => onAddAnnotation('rect')}
        className="border p-2 rounded bg-blue-500 text-white"
      >
        Add Rectangle
      </button>
      <button
        onClick={() => onAddAnnotation('circle')}
        className="border p-2 rounded bg-blue-500 text-white"
      >
        Add Circle
      </button>
      <button
        onClick={() => onAddAnnotation('text')}
        className="border p-2 rounded bg-blue-500 text-white"
      >
        Add Text
      </button>
    </div>
  );
}

export default AnnotationControls;
