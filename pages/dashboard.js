import LayoutDashboard from './components/LayoutDashboard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuPrincipal from './components/MenuPrincipal';
import Link from 'next/link';

export default function Dashboard(){
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
            </div>
          </Col>
          <Col className="contenidoDash">
          Contenido
          </Col>
        </Row>
      </Container>
    </LayoutDashboard>
  )
}