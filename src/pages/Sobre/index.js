import styles from './styles.module.scss';

import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter, FaReact, FaNode, FaWhatsapp } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

export default function Sobre() {
  return (
    <>
        <main className={styles.container} >
          <div className={styles.containerHeader} >
            <section>
              <h1>George Lucas</h1>
              <p>
                Criador de aplicativos, ingressando nesta nova área de criação de website
                com vários anos no mercado, cheio de vontade e determinação para desempenhar o melhor
                para todos, aprendendo um framework excelente NextJS estou começando a ter resultados
                empolgantes com esta nova estrutura de desenvolvimento web front-end que por sua
                vez e baseado em ReactJS, hoje este website que vos esta usando para ler este
                meu comentário foi feito em NextJS com CMS online.
              </p>
              <br />
              <br />
              <section>
                <a><FaNode size={40} /></a>
                <a><FaReact size={40} /></a>
                <a><SiNextdotjs size={40} /></a>
              </section>
              <br />
              <br />
              <br />
              <br />
              <p>Quer conversar? essas são minhas redes sociais.</p>
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
            </section>
          </div>
        </main>

    </>
  );
}

