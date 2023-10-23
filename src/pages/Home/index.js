import React, { useState } from 'react';
import Concluidos from '../../components/concluidos';
import Ativos from '../../components/ativos';
import styles from '../../global.module.scss';
import { FaReact, FaNode, } from 'react-icons/fa';
import { SiNextdotjs, SiPython, SiFlutter, SiJavascript } from 'react-icons/si';
import ciscopython1 from '../../img/cisco-python1.png';
import ciscopython2 from '../../img/cisco-python2.png';

export default function Home() {
  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);

  const handleButton1Click = () => {
    setShowInfo1(!showInfo1);
    setShowInfo2(false);
  };

  const handleButton2Click = () => {
    setShowInfo2(!showInfo2);
    setShowInfo1(false);
  };
return(
  <>
  <br/>
  <container className={styles.container}> 
        <section>
                    <h3><strong><center>
                      
                    </center></strong></h3>
                    <p className={styles.ctaText}>
                      
                    </p>
        </section>
        <br/>
        <hr className={styles.hr3}/>
        <br/>
        <section>
                <h3><strong><center>
                      Projetos
                </center></strong></h3>
                <br/>
                <div className={styles.container3}>
                    <center>
                    <button className={styles.botaoconcluidos} onClick={handleButton1Click}>Concluidos</button>
                    <button className={styles.botaoativos} onClick={handleButton2Click}>Ativos</button>
                    </center>
                    {showInfo1 && <div><Concluidos/></div>}
                    {showInfo2 && <div><Ativos/></div>}
                </div>
          </section>
    </container> 
    <br/>
    <hr className={styles.hr3}/>
    <br/>
  <container className={styles.container1}> 
            <section>
              <section className={styles.container}>
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
                </section>
                  <br />
                  <br />
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
            <br/>

            <section>
                <div style={{ display: 'flex', justifyContent: 'center' , marginLeft: '3rem' , marginRight: '3rem' , height: '580px'}}>
                    <div style={{marginLeft: '3rem' , marginRight: '3rem'}}>
                      <iframe
                        title="Postagem do Instagram"
                        srcDoc='<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/georgelucasdev/" data-instgrm-version="13"></blockquote> <script async src="//www.instagram.com/embed.js"></script>'
                        width="340"
                        height="450"
                        allowtransparency="true"
                      >
                      </iframe>
                    </div>
                  </div>
              </section>
  </container>
  </>
 );
}