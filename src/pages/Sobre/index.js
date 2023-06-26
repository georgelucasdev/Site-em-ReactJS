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
              Olá, sou George Lucas, um desenvolvedor de jogos com experiência e paixão pela área de hardware. Tenho 31 anos e trabalho atualmente como desenvolvedor de jogos, sendo que alguns dos meus jogos já alcançaram mais de 10 mil downloads. Atualmente, estou na fase finalização de um jogo para computador.
Desde os meus 12 anos, venho trabalhando com hardware e adquirindo conhecimentos valiosos nessa área. Iniciei minha jornada como pseudo técnico em uma lan house e continuo buscando aprimorar minhas habilidades ao estudar para obter meu diploma técnico.
Além disso, tenho interesse em projetos sociais e busco contribuir para a comunidade. Desenvolvi um aplicativo sem anúncios que auxilia crianças a melhorarem a pronúncia e a oratória, com o objetivo de tornar a educação mais acessível.
Estou animado com a oportunidade de fazer a diferença em sua empresa. Tenho habilidades sólidas e estou sempre em busca de desafios que me permitam crescer profissionalmente. Seria um prazer discutir como posso contribuir para o sucesso da sua empresa.
Agradeço a atenção e estou à disposição para fornecer mais informações.
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

