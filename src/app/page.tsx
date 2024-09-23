"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./page.module.css";

const Home = () => {
  const [show, setShow] = useState(false);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Lista de audios
  const audioList = [
    { src: "/no-creo-en-el-destino-video-casero.mp3", title: "Audio 1" },
    { src: "/Kurt-NQSTA.mp3", title: "Audio 2" },
    // Agrega más audios aquí si lo deseas
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Cambiar audio
  const changeAudio = (index: number) => {
    setCurrentAudioIndex(index);
    if (audioRef.current) {
      audioRef.current.pause(); // Detener el audio actual
      audioRef.current.load(); // Cargar el nuevo audio
      audioRef.current.play(); // Reproducir el nuevo audio
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Flores para Mar</h1>
      <h3 className={styles.subtitle}>Dale play &#128151;</h3>
      <h4 className={styles.subtext}>(si puedes, usa audifonos)</h4>
      <audio ref={audioRef} autoPlay loop controls className={styles.audio}>
        <source src={audioList[currentAudioIndex].src} type="audio/mpeg" />
        Tu navegador no soporta la etiqueta de audio.
      </audio>
      <div className={styles.audioControls}>
        <h5>Selecciona un audio:</h5>
        {audioList.map((audio, index) => (
          <button
            key={index}
            onClick={() => changeAudio(index)}
            className={
              currentAudioIndex === index ? styles.activeButton : styles.button
            } // Cambia de color
          >
            {audio.title}
          </button>
        ))}
      </div>
      <div className={styles.flowersContainer}>
        {show && (
          <>
            {/* Puedes repetir los SVGs como desees */}
            {Array(3).fill(
              <svg
                width="200"
                height="240"
                viewBox="0 0 200 240"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Tallo detrás de la flor */}
                <rect x="90" y="150" width="15" height="60" fill="green" />
                <g className={styles.flower}>
                  <circle cx="100" cy="100" r="50" fill="yellow" />
                  <circle cx="60" cy="60" r="20" fill="yellow" />
                  <circle cx="140" cy="60" r="20" fill="yellow" />
                  <circle cx="60" cy="140" r="20" fill="yellow" />
                  <circle cx="140" cy="140" r="20" fill="yellow" />
                  <circle cx="100" cy="100" r="20" fill="orange" />
                </g>
              </svg>,
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
