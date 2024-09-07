import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import { Loader, KeyboardControls, Environment, OrbitControls } from "@react-three/drei";
import { Physics } from '@react-three/rapier';
import { Provider, useSelector } from 'react-redux';
import { store } from './store/store.js';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <ScoreCard />
      <Loader />
      <KeyboardControls map={[
        { name: 'forward', keys: ['ArrowUp', 'w'] },
        { name: 'backward', keys: ['ArrowDown', 's'] }
      ]}>
        <Canvas style={{ position: "absolute" }} camera={{ position: [0, 7, 21] }}>
          <OrbitControls />
          <Environment preset="night" />
          <Physics>
            <App />
          </Physics>
        </Canvas>
      </KeyboardControls>
    </Provider>
  </>
);

function ScoreCard() {
  let scores = useSelector((state) => state.position.score);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <>
      <InstructionsModal showModal={showModal} setShowModal={setShowModal} />
      <div style={{
        position: "relative",
        left: "0",
        top: "10px",
        zIndex: 1,
        color: "#000",
        padding: "15px",
        borderRadius: "8px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        maxWidth: "300px",
        margin: "0 auto"
      }}>
        <h1 style={{
          fontSize: "1.5rem",
          margin: "10px 0",
          color: "#00D8FF",
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)"
        }}>{scores} : Obstacles</h1>
        <h2 style={{
          fontSize: "1.2rem",
          margin: "10px 0",
          color: scores > 0 ? "red" : "green",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)"
        }}>{scores > 0 ? "You’ve lost this round, but you can keep playing" : ""}</h2>
        <p style={{
          fontSize: "1rem",
          margin: "15px 0",
          color: "#000",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)"
        }}>Goal: Escape the falling shapes to survive</p>
        <button
          onClick={() => window.location.reload()}
          style={{
            backgroundColor: "#00D8FF",
            color: "#fff",
            border: "none",
            padding: "8px 16px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "0.9rem",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#008ECC"}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#00D8FF"}
        >
          Restart
        </button>
      </div>
    </>
  );
}

function InstructionsModal({ showModal, setShowModal }) {
  return showModal ? (
    <div style={{
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: "#fff",
        borderRadius: "10px",
        padding: "20px",
        textAlign: "center",
        maxWidth: "400px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        animation: "fadeIn 0.5s ease"
      }}>
        <h2 style={{ fontSize: "1.5rem", color: "#00D8FF" }}>Click to play</h2>
        <p style={{ fontSize: "1rem", marginBottom: "10px" }}>
          <strong>To move the vehicle forward, press <span style={{ color: '#00D8FF' }}>W</span></strong>
          <br />Keep the mouse inside the grid.
          <strong> <br />To move the vehicle backward, press <span style={{ color: '#00D8FF' }}>S</span></strong>
          <br />Point the cursor to change direction.
        </p>
        <button
          onClick={() => setShowModal(false)}
          style={{
            backgroundColor: "#00D8FF",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#008ECC"}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#00D8FF"}
        >
          Got it!
        </button>
      </div>
    </div>
  ) : null;
}
