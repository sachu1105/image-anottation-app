import { useEffect, useRef } from 'react';

function Canvas({ image, annotations, onUpdateAnnotation }) {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current && imageRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx.drawImage(imageRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
      annotations.forEach((annotation) => drawAnnotation(ctx, annotation));
    }
  }, [image, annotations]);

  const drawAnnotation = (ctx, annotation) => {
    if (annotation.type === 'rect') {
      ctx.strokeRect(annotation.x, annotation.y, annotation.width, annotation.height);
    } else if (annotation.type === 'circle') {
      ctx.beginPath();
      ctx.arc(
        annotation.x + annotation.width / 2,
        annotation.y + annotation.height / 2,
        annotation.width / 2,
        0,
        Math.PI * 2
      );
      ctx.stroke();
    } else if (annotation.type === 'text') {
      ctx.fillText(annotation.text, annotation.x, annotation.y);
    }
  };

  return (
    <div className="relative">
      {image && (
        <>
          <img ref={imageRef} src={image} alt="Uploaded" className="hidden" />
          <canvas
            ref={canvasRef}
            width={800}
            height={600}
            className="border border-gray-300"
          />
        </>
      )}
    </div>
  );
}

export default Canvas;
