import React, { useRef, useEffect, useState } from 'react';
import * as faceapi from 'face-api.js';

function App() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = process.env.PUBLIC_URL + '/';

      // Model va detektorlarni yuklash
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
      await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
      await faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL);

      startVideo();
    };

    loadModels();
  }, []);

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })  // Video ruxsatini so'rash
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      })
      .catch((err) => {
        console.error('Kamera ochilmadi:', err);
        alert('Kameraga kirish ruxsati berilmadi yoki kamera mavjud emas');
      });
  };

  const handleVideoPlay = async () => {
    const displaySize = { width: videoRef.current.width, height: videoRef.current.height };
    faceapi.matchDimensions(canvasRef.current, displaySize);

    setInitialized(true);
    setInterval(async () => {
      // Yuzlarni aniqlash
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceDescriptors();

      // Yuzlarni ekran hajmiga moslash
      const resizedDetections = faceapi.resizeResults(detections, displaySize);

      // Kanvasni tozalash
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, displaySize.width, displaySize.height);

      // Yuzlarni chizish
      resizedDetections.forEach(detection => {
        const box = detection.detection.box;
        ctx.strokeStyle = '#00f';  // Ko‘k ramka
        ctx.lineWidth = 3;  // Ramka qalinligi
        ctx.strokeRect(box.x, box.y, box.width, box.height);  // Ramkani chizish
      });

      // Landmarklarni ko‘rsatish (yuz chiziqlari)
      faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);
    }, 100);  // Har 100 ms da yangilanadi
  };

  return (
    <div className="App">
      <h2>Real vaqt yuzni aniqlash va ko'k ramka bilan ko'rsatish</h2>
      <div style={{ position: 'relative', width: '720px', height: '560px' }}>
        <video
          ref={videoRef}
          onPlay={handleVideoPlay}
          width="720"
          height="560"
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
        <canvas
          ref={canvasRef}
          width="720"
          height="560"
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      </div>
    </div>
  );
}

export default App;
