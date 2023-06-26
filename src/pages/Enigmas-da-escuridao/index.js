import React from 'react';
import styles from '../../global.module.scss'
import VideoPlayer from '../../components/VideoPlayer';

export default function Enigmas() {
  return (
    <>
    <main>
     <h1 style={{ fontFamily: 'Invisible-ExtraBold', display: 'flex', justifyContent: 'center' , marginTop:'2rem' }}>Enigmas da Escuridão</h1>
    </main>
    <div style={{ display: 'flex', justifyContent: 'center'}}>
        <VideoPlayer/>
    </div>
    </>
  );
}

