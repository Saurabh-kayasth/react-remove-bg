import React, { useEffect, useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import * as bodyPix from "@tensorflow-models/body-pix";
import removeBGTF from "./lib/components/removeBGTF";
import styles from '././App.module.css';

function App() {

  const [removedBGImage, setRemovedBGImage] = React.useState(null);
  const [newImage, setNewImage] = React.useState(null);
  const [selectedResolution, setSelectedResolution] = React.useState('medium');

  const removeBG = async (imageSrc) => {
    await removeBGTF({
      imageSrc,
      internalResolution: selectedResolution,
    }, function (result) {
      setRemovedBGImage(result);
    });
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p className={styles.heading}>REACT REMOVE BG</p>
      </header>

      <div className={styles.outputContainer}>
        <div className={styles.leftContainer}>
          <h4 className={styles.title}>Upload File Here</h4>
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => {
                setNewImage(reader.result);
              }
            }}
            className={styles.fileUpload}
          />

          <div>
            <h5 className={styles.subTitle}>Select Resoulution</h5>
          </div>
          <div className={styles.radioContainer}>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="internalResolution"
                value="high"
                checked={selectedResolution === 'high'}
                onChange={(e) => {
                  setSelectedResolution(e.target.value);
                }}
              />
              High
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="internalResolution"
                value="low"
                checked={selectedResolution === 'low'}
                onChange={(e) => {
                  setSelectedResolution(e.target.value);
                }}
              />
              Low
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="internalResolution"
                value="medium"
                checked={selectedResolution === 'medium'}
                onChange={(e) => {
                  setSelectedResolution(e.target.value);
                }}
              />
              Medium
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="internalResolution"
                value="full"
                checked={selectedResolution === 'full'}
                onChange={(e) => {
                  setSelectedResolution(e.target.value);
                }}
              />
              Full
            </label>
          </div>

          <button
            onClick={() => {
              removeBG(newImage);
            }}
            className={styles.btn}
          >
            REMOVE BG
          </button>
        </div>

        <div className={styles.rightContainer}>
         <img src={newImage} alt="removedBG" className={styles.img} />
          {removedBGImage && <img src={removedBGImage.src} alt="removedBG" className={styles.img} />}
        </div>
      </div>

      <footer className={styles.footer}>
        <a href="https://in.linkedin.com/in/saurabh-kayasth-684887148" className={styles.link}>
          <p className={styles.footerText}>@SAURABH_KAYASTH</p>
        </a>
        <p className={styles.footerSubText}>
           <span className={styles.copyright}>©</span>
          2022</p>
      </footer>
    </div>
  );
}

export default App;
