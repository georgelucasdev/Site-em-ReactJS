import styles from '../../global.module.scss'
import { FaReact, FaNode, } from 'react-icons/fa';
import { SiNextdotjs, SiPython, SiFlutter, SiJavascript } from 'react-icons/si';
import ciscopython1 from '../../img/cisco-python1.png';
import ciscopython2 from '../../img/cisco-python2.png';
import React from 'react';

export default function Sobre() {
  return (
    <>
      <main className={styles.container} >
        <div className={styles.containerHeader} >
          <section>
            <br />
            <h1><strong><center>George Lucas</center></strong></h1>
            <br />
            <br />
            <p>
              <center>
                Em constante evolução em desenvolvimento web e mobile; focado em criar novas experiências
                para o usuário com as tecnologias e frameworks mais utilizadas do mercado :
                ReactJS, JavaScript, Flutter, ReactNative, Python .
                De caráter honesto, busca o estímulo, organização, compartilhamento de conhecimento e o
                contínuo desenvolvimento pessoal e profissional do grupo de trabalho.
              </center>
            </p>
            <br />
            <br />
            <div className={styles.container4}>
              <section className={styles.sectionItens}>
                <a><FaNode size={40} /></a>
              </section>
              <section className={styles.sectionItens}>
                <a><FaReact size={40} /></a>
              </section>
              <section className={styles.sectionItens}>
                <a><SiNextdotjs size={40} /></a>
              </section>
              <section className={styles.sectionItens}>
                <a><SiPython size={40} /></a>
              </section>
              <section className={styles.sectionItens}>
                <a><SiFlutter size={40} /></a>
              </section>
              <section className={styles.sectionItens}>
                <a><SiJavascript size={40} /></a>
              </section>
            </div>
            <br />
            <br />
            <h3><strong><center>
              Certificações
            </center></strong></h3>
            <div className={styles.bb}>
              <div className={styles.certificacao}>
                <a href="https://www.credly.com/badges/4346d242-d25a-4490-ac73-571979364c08/public_url" target="_blank" rel="noreferrer">
                  <img src={ciscopython1} />
                </a>
                <a href="https://www.credly.com/badges/fc0cd9a5-b62d-4b33-84b3-9337307b4da9/public_url" target="_blank" rel="noreferrer">
                  <img src={ciscopython2} />
                </a>
              </div>
            </div>
          </section>
        </div>
        <br />
        <br />
        <br />
      </main>
    </>
  );
}

