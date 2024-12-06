import  { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import AnnotationControls from './components/AnnotationControl';
import Canvas from './components/Canvas';
import AnnotationList from './components/AnnotationList';

function App() {
  const [image, setImage] = useState(null);
  const [annotations, setAnnotations] = useState([]);
  const [currentAnnotation, setCurrentAnnotation] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setImage(imgURL);
    }
  };

  const handleAddAnnotation = (type) => {
    setCurrentAnnotation({ type, x: 100, y: 100, width: 100, height: 50, text: '' });
  };

  const handleAnnotationChange = (e) => {
    if (currentAnnotation) {
      const updatedAnnotation = { ...currentAnnotation, [e.target.name]: e.target.value };
      setCurrentAnnotation(updatedAnnotation);
    }
  };

  const handleSaveAnnotation = () => {
    if (currentAnnotation) {
      setAnnotations([...annotations, currentAnnotation]);
      setCurrentAnnotation(null);
    }
  };

  const handleDeleteAnnotation = (index) => {
    const newAnnotations = annotations.filter((_, i) => i !== index);
    setAnnotations(newAnnotations);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-3xl">
        <ImageUpload onImageUpload={handleImageUpload} />
        <AnnotationControls onAddAnnotation={handleAddAnnotation} />

        {currentAnnotation && (
          <div className="mb-4">
            {currentAnnotation.type === 'text' ? (
              <input
                type="text"
                name="text"
                value={currentAnnotation.text}
                onChange={handleAnnotationChange}
                className="border p-2 rounded w-full mb-2"
                placeholder="Enter text"
              />
            ) : (
              <>
                <input
                  type="number"
                  name="x"
                  value={currentAnnotation.x}
                  onChange={handleAnnotationChange}
                  className="border p-2 rounded w-full mb-2"
                  placeholder="X Position"
                />
                <input
                  type="number"
                  name="y"
                  value={currentAnnotation.y}
                  onChange={handleAnnotationChange}
                  className="border p-2 rounded w-full mb-2"
                  placeholder="Y Position"
                />
                <input
                  type="number"
                  name="width"
                  value={currentAnnotation.width}
                  onChange={handleAnnotationChange}
                  className="border p-2 rounded w-full mb-2"
                  placeholder="Width"
                />
                <input
                  type="number"
                  name="height"
                  value={currentAnnotation.height}
                  onChange={handleAnnotationChange}
                  className="border p-2 rounded w-full mb-2"
                  placeholder="Height"
                />
              </>
            )}
            <button
              onClick={handleSaveAnnotation}
              className="border p-2 rounded bg-green-500 text-white w-full"
            >
              Save Annotation
            </button>
          </div>
        )}

        <Canvas image={image} annotations={annotations} />
        <AnnotationList annotations={annotations} onDeleteAnnotation={handleDeleteAnnotation} />
      </div>
    </div>
  );
}

export default App;
