import LayoutDashboard from './components/LayoutDashboard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuPrincipal from './components/MenuPrincipal';

export default function Inicio(){
  return(
    <LayoutDashboard>
      <Container fluid={true}>
        <Row>
          <Col xs={2} md={2} lg={2} className="menuDash">
            <div>
            <hr/>
              <img src="/logo.jpg" alt="" title="" className="img-fluid" />
            </div>
            <MenuPrincipal/>
            <div className="d-flex flex-column">
              <img src="/logo_bienestar.jpg" alt="" title="" className="img-fluid" />
              <hr/>
              <img src="/logo_tec.jpg" alt="" title="" className="img-fluid" />
              <hr/>
            </div>
          </Col>
          <Col className="contenidoDash inicio">
            <h3>Entre <b>2020 y 2021</b> más de <b>un millón</b> de micro,<br/>pequeñas y medianas empresas mexicanas en las que trabajaban casi <b>3 millones de personas cerraron</b> de forma definitiva por la crisis...</h3>
          </Col>
        </Row>
      </Container>
    </LayoutDashboard>
  )
}