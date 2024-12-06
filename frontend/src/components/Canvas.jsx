import { useEffect, useRef } from 'react'; 


const Canvas=({ image, annotations, onUpdateAnnotation })=> {
  // `canvasRef` is used to reference the <canvas> element in the DOM
  const canvasRef = useRef(null);
  // `imageRef` is used to reference the hidden <img> element that loads the image
  const imageRef = useRef(null);

  // Use the `useEffect` hook to redraw the canvas whenever the `image` or `annotations` props change
  useEffect(() => {
    // Ensure the canvas and image are loaded before attempting to draw
    if (canvasRef.current && imageRef.current) {
      const ctx = canvasRef.current.getContext('2d'); // Get the 2D drawing context from the canvas

      // Clear the canvas to remove any previous drawings
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      // Draw the image on the canvas
      ctx.drawImage(
        imageRef.current, 
        0, 0,             
        canvasRef.current.width, 
        canvasRef.current.height 
      );

      // Loop through the annotations array and draw each annotation on the canvas
      annotations.forEach((annotation) => drawAnnotation(ctx, annotation));
    }
  }, [image, annotations]); 

  // Function to draw a specific annotation based on its type
  const drawAnnotation = (ctx, annotation) => {
    if (annotation.type === 'rect') {
      // Draw a rectangle
      ctx.strokeRect(annotation.x, annotation.y, annotation.width, annotation.height);
    } else if (annotation.type === 'circle') {
      // Draw a circle
      ctx.beginPath(); // Start a new drawing path
      ctx.arc(
        annotation.x + annotation.width / 2,   
        annotation.y + annotation.height / 2,  
        annotation.width / 2,                  
        0,                                     
        Math.PI * 2                            // End angle (2π radians for a full circle)
      );
      ctx.stroke(); // Draw the circle outline
    } else if (annotation.type === 'text') {
      // Draw text
      ctx.fillText(annotation.text, annotation.x, annotation.y);
    }
  };

  return (
    <div className="relative">
      {/* Only render if there is an image */}
      {image && (
        <>
          {/* The hidden <img> element is used to load the image for the canvas */}
          <img ref={imageRef} src={image} alt="Uploaded" className="hidden" />

          {/* The <canvas> element where the image and annotations are drawn */}
          <canvas
            ref={canvasRef}              
            width={400}                  
            height={400}                  
            className="border border-gray-300"
          />
        </>
      )}
    </div>
  );
}

export default Canvas; 
