
function ImageUpload({ onImageUpload }) {
  return (
    <div className="mb-4">
      <input
        type="file"
        onChange={onImageUpload}
        className="border p-2 rounded w-full"
      />
    </div>
  );
}

export default ImageUpload;
