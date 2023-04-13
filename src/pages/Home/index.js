import styles from '../../global.module.scss'


export default function Home() {
    return (
      <>
        <div className={styles.container} >
            <br/>
          <div>
            <h1 className={styles.h1}><center>

          </center></h1>
          </div>
          <br/>
          <br/>
          <section className={styles.ctaText}>
            <p>
                Link Provisorio para playstore onde esta os apps
            </p>
          </section>
          <center><li><a href="https://play.google.com/store/apps/dev?id=8366175090222756128" target="_blank">Google Play</a></li></center>
        </div>
      </>
    );
  }