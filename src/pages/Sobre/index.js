import styles from '../../global.module.scss'
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter, FaReact, FaNode, } from 'react-icons/fa';
import { SiNextdotjs, SiKotlin, SiFlutter, SiJavascript } from 'react-icons/si';

export default function Sobre() {
  return (
    <>
        <main className={styles.container} >
          <div className={styles.containerHeader} > 
            <section>
              <br/>
              <br/>
              <br/>
              <br/>
              <h1><strong><center>George Lucas</center></strong></h1>
              <br/>
              <br/>
              <p>
                <center>
              Em constante evolução em desenvolvimento web para front end; focado em criar novas experiências
               para o usuário com as tecnologias e frameworks mais utilizadas do mercado :
               ReactJS, JavaScript, Flutter, ReactNative, Kotlin .
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
                <a><SiKotlin size={40} /></a>
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
              <center>
              <p>Nossas ultimas postagens aqui</p>
              <br />
              <a href="https://twitter.com/georgelucasdev">
                <FaTwitter size={40} />
              </a>
              </center>
            </section>
          </div>
        </main>

    </>
  );
}

