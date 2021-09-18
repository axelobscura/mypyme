import LayoutDashboard from './components/LayoutDashboard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuPrincipal from './components/MenuPrincipal';
import Link from 'next/link';

export default function Inicio(){
  return(
    <LayoutDashboard>
      <Container fluid={true}>
        <Row>
          <Col xs={2} md={2} lg={2} className="menuDash">
            <div>
            <hr/>
              <Link href="/">
                <img src="/logo.jpg" alt="" title="" className="img-fluid" />
              </Link>
            </div>
            <MenuPrincipal/>
            <div className="d-flex flex-column">
              <Link href="/">
                <img src="/logo_bienestar.jpg" alt="" title="" className="img-fluid" />
              </Link>
              <hr/>
              <Link href="/">
                <img src="/logo_tec.jpg" alt="" title="" className="img-fluid" />
              </Link>
              <hr/>
            </div>
          </Col>
          <Col className="contenidoDash inicio">
            <h3>Entre <b>2020 y 2021</b> más de <b>un millón</b> de micro,<br/>pequeñas y medianas empresas mexicanas<br/> en las que trabajaban casi<br/><b>3 millones de personas cerraron</b><br/>de forma definitiva por la crisis...</h3>
          </Col>
        </Row>
      </Container>
    </LayoutDashboard>
  )
}