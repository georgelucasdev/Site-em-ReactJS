import styles from '../../global.module.scss'
import  ProjetosComponent from '../../components/Projetos'
import React, { useState } from 'react';
import Concluidos from '../../components/concluidos';
import Ativos from '../../components/ativos';


export default function Projetos() {
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

    return (
      <>
        <div className={styles.container} >
          <br/>
          <br/>
        </div>
        <div className={styles.quadrado}>
        <div className={styles.container2}>
          <p>
            <center><h3>Projetos Concluídos</h3></center>
            <br/>
            1. Objetivos e metas alcançados:
            Nosso objetivo primordial consistia em aplicar conhecimentos pré-estabelecidos de outras áreas no âmbito da criação de aplicativos para Android. 
            A conclusão bem-sucedida desses projetos demonstra nossa habilidade e competência na elaboração e desenvolvimento de aplicativos para essa plataforma.
            <br/>
            <br/>
            2. Análise de desempenho:
            Nossos aplicativos tendem a apresentar estabilidade superior se comparados a outros disponíveis no mercado. Empregamos técnicas 
            avançadas de otimização de paginação, o que resulta em um desempenho aprimorado dos aplicativos. 
            Além disso, nossos projetos desenvolvidos utilizando React Native e Flutter têm comprovado sua eficiência.
            <br/>
            <br/>
            3. Lições aprendidas: 
            Após diversas análises de comportamento e aprendizado em outros códigos, concluímos que adotar uma abordagem simplista não é suficiente. 
            Em vez de nos concentrarmos em uma única estrutura de dados, atualmente trabalhamos com plataformas múltiplas. 
            Essa estratégia tem nos permitido explorar um leque mais amplo de possibilidades e obter melhores resultados no desenvolvimento de aplicativos.
          </p>
        </div>
        <div className={styles.container2}>
          <p>
            <center><h3>Projetos Ativos</h3></center>
            <br/>
            <br/>
            1. Progresso atual:
            Atualmente, nossos projetos já se encontram ativos na Play Store, e estamos aplicando melhorias para que o usuário final possa utilizar nosso aplicativo da melhor forma possível.
            <br/>
            <br/>
            2. Desafios e soluções: 
            Nossa maior preocupação é manter o código rápido, eficiente e sempre atualizado com as melhores práticas do mercado.
            <br/>
            <br/>
            3. Projeções futuras:
            Devido à falta de orçamento para divulgação, nossos projetos tendem a ter visibilidade limitada. No entanto, 
            todos eles trabalham com divulgação orgânica. Se, hoje, você observa alguém utilizando nosso aplicativo, 
            é porque o usuário não foi induzido a baixá-lo, mas sim um amigo ou colega próximo o indicou para utilizá-lo.
          </p>
        </div>
        </div>
        <br/>
        <br/>
        <div className={styles.container3}>
        <center>
        <button className={styles.botaoconcluidos} onClick={handleButton1Click}>Concluidos</button>
        <button className={styles.botaoativos} onClick={handleButton2Click}>Ativos</button>
        </center>
        {showInfo1 && <div><Concluidos/></div>}
        {showInfo2 && <div><Ativos/></div>}
        </div>
      </>
    );
  }