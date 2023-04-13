import styles from '../../global.module.scss'
import  ProjetosComponent from '../../components/Projetos'

export default function Projetos() {
    return (
      <>
        <div className={styles.container} >
          <br/>
          <br/>
          <ProjetosComponent/>
          </div>
      </>
    );
  }