# Image Annotation Tool

A simple web application that allows users to upload an image, add annotations (rectangles, circles, or text), and manage them using React, Tailwind CSS, and Vite.

## Features

- **Image Upload**: Users can upload an image to annotate.
- **Annotation Types**: You can add rectangle, circle, or text annotations to the image.
- **Annotation Controls**: Edit and delete annotations.
- **Canvas Rendering**: Annotations are rendered directly on the image within a canvas.
  
## Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For styling the components.
- **Vite**: For fast development and bundling.
- **HTML5 Canvas**: For rendering the annotations over the image.

## Installation

### 1. Clone the repository

  git clone https://github.com/yourusername/image-annotation-app.git

### 2. Navigate to the project directory

cd frontend

### 3. Install dependencies

npm install

### 4. Start the development server

npm run dev


# How to Use
- **Upload an Image:** Use the file input to upload an image.
- **Add Annotations:** Select the annotation type (Rectangle, Circle, or Text) and click on the canvas to draw.
- **Modify Annotations:** After selecting an annotation, you can adjust its position and size. For text annotations, you can edit the content.
- **Save Annotations:** Save the annotations to the list by clicking the 'Save Annotation' button.
- **Delete Annotations:** Click the 'Delete' button next to any annotation in the list to remove it.


# Folder Structure

```bash 
frontend
├── src
│   ├── components
│   │   ├── AnnotationControl.js  # Controls for adding and editing annotations
│   │   ├── Canvas.js             # Renders the canvas and annotations
│   │   ├── ImageUpload.js        # Handles image upload functionality
│   │   └── AnnotationList.js     # Displays and manages saved annotations
│   ├── App.js                    # Main application component
│   └── main.js                   # Entry point for React
├── public
│   └── index.html                # HTML file for the app
├── tailwind.config.js            # Tailwind configuration file
├── package.json                 # Project dependencies and scripts
└── README.md                    # Project documentation

```
