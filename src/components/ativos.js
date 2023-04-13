import styles from '../global.module.scss'
import { Card, CardImg, CardBody, CardTitle, CardText, Row, Col} from "reactstrap";
import bb from '../img/aventuras-bb.jpg'


export default function Ativos() {
    return (
      <>
      <center>
           <div className={styles.productlist} id="projetos">
            <Row>
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
            </Row>
          </div>
          </center></>
    );
  }