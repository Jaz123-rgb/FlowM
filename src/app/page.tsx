"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

const Home = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Flores para Mar</h1>
      <h3 className={styles.subtitle}>Dale play &#128151;</h3>
      <h4 className={styles.subtext}>(si puedes, usa audifonos)</h4>
      <audio autoPlay loop controls className={styles.audio}>
        <source src="/Kurt-NQSTA.mp3" type="audio/mpeg" />
        Tu navegador no soporta la etiqueta de audio.
      </audio>
      <div className={styles.flowersContainer}>
        {show && (
          <>
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
            </svg>
            {/* Repite el mismo SVG para las otras flores */}
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
            </svg>
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
            </svg>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
