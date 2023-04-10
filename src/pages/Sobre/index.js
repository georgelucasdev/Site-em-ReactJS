import styles from './styles.module.scss';
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter, FaReact, FaNode, } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

export default function Sobre() {
  return (
    <>
        <main className={styles.container} >
          <div className={styles.containerHeader} >
            <section>
              <h1><center>George Lucas</center></h1>
              <p>
                <center>
              Em constante evolução em desenvolvimento web para front end; focado em criar novas experiências
               para o usuário com as tecnologias e frameworks mais utilizadas do mercado :
               ReactJS, NextJS, Typescript, NodeJS em combinação com banco de dados em servidor.
               De caráter honesto, busca o estímulo, organização, compartilhamento de conhecimento e o
                contínuo desenvolvimento pessoal e profissional do grupo de trabalho.
                </center>
              </p>
              <br />
              <br />
              <center>
              <section>
                <a><FaNode size={40} /></a>
                <a><FaReact size={40} /></a>
                <a><SiNextdotjs size={40} /></a>
              </section>
              </center>
              <br />
              <br />
              <center>
              <p>Quer conversar? essas são minhas redes sociais.</p>
              <br />
              <a href="https://www.facebook.com/Lucasc4nd1d0">
                <FaFacebook size={40} />
              </a>
              <a href="https://www.instagram.com/georgelucasdev">
                <FaInstagram size={40} />
              </a>
              <a href="https://www.linkedin.com/in/george-lucas-candido-da-silva-65585b179/">
                <FaLinkedin size={40} />
              </a>
              <a href="https://twitter.com/LucasC4ndid0">
                <FaTwitter size={40} />
              </a>
              </center>
            </section>
          </div>
        </main>

    </>
  );
}

