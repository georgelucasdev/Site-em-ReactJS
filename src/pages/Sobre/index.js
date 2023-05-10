import styles from '../../global.module.scss'
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter, FaReact, FaNode, } from 'react-icons/fa';
import { SiNextdotjs, SiPython, SiFlutter, SiJavascript } from 'react-icons/si';
import python from '../../img/python-essentials-1.1.png'
import React from 'react';

export default function Sobre() {
  return (
    <>
        <main className={styles.container} >
          <div className={styles.containerHeader} > 
            <section>
              <br/>
              <br/>
              <h1><strong><center>George Lucas</center></strong></h1>
              <br/>
              <br/>
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
              <br/>
              <br/>
              <br/>
              <div className={styles.container}>
              <h3><strong><center>
                Certificações
                </center></strong></h3>
                <br />
              <section className={styles.sectionItens}>
              <center><a href="https://www.credly.com/badges/4346d242-d25a-4490-ac73-571979364c08/public_url" target="_blank" rel="noreferrer">
                <img src={python} size={40} />
                </a></center>
              </section>
              </div>
            </section>
          </div>
        </main>

    </>
  );
}

