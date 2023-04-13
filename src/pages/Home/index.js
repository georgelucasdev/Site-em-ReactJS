import styles from '../../global.module.scss'
import { Card, CardImg, CardBody, CardTitle, CardText, Row, Col} from "reactstrap";
import bb from '../../img/aventuras-bb.jpg'


export default function Home() {
    return (
      <>
      <center>
           <div className={styles.productlist}>
            <Row>
              <Col xs="12" md="6">
                <Card className={styles.productcard} href="/">
                <a href="https://play.google.com/store/apps/details?id=com.georgelucas.seashark" target="_blank" >
                  <CardImg
                    className={styles.productimg}
                    src={bb}
                    alt="Aventuras Bebê Tubarão"
                  />  
                  </a>
                </Card>
              </Col>
              <Col xs="12" md="5">
                <Card className={styles.productcard}>
                  <CardBody>
                    <CardTitle>Aventuras Bebê Tubarão</CardTitle>
                    <CardText>
                      Aventuras do Bebê Tubarão é um jogo emocionante e divertido que leva os jogadores a explorar o oceano em busca de tesouros e aventuras.
                      Neste jogo, você assume o papel do adorável Bebê Tubarão, um pequeno tubarão que está determinado a encontrar o maior tesouro do oceano.
                      <br/>
                      <br/>
                      Ao longo do caminho, você enfrentará vários desafios, incluindo obstáculos subaquáticos, inimigos ferozes e quebra-cabeças intrigantes.
                      Você precisará usar suas habilidades de natação e estratégia para superar esses obstáculos e chegar ao tesouro final.
                      <br/>
                      <br/>
                      O jogo apresenta gráficos vibrantes e animações divertidas que certamente encantarão jogadores de todas as idades. Com várias missões
                      emocionantes e objetivos para alcançar, Aventuras do Bebê Tubarão
                      é um jogo envolvente e cativante que oferece horas de entretenimento para jogadores de todas as habilidades. Pronto para mergulhar nessa aventura submarina?
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            {/* <Row>
              <Col xs="12" md="6">
                <Card className={styles.productcard}>
                <a href="/" target="_blank" >
                  <CardImg
                    className={styles.productimg}
                    src="https://via.placeholder.com/150x150"
                    alt="Imagem do produto 2"
                  />
                </a>
                </Card>
              </Col>
              <Col xs="12" md="5">
                <Card className={styles.productcard}>
                  <CardBody>
                    <CardTitle>Produto 2</CardTitle>
                    <CardText>Descrição do produto 2</CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row> */}
          </div>
          </center></>
    );
  }