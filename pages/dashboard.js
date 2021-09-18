import LayoutDashboard from './components/LayoutDashboard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Dashboard(){
  return(
    <LayoutDashboard>
      <Container fluid={true}>
        <Row>
          <Col xs={2} md={2} lg={2}>
            Menu
          </Col>
          <Col>
          Contenido
          </Col>
        </Row>
      </Container>
    </LayoutDashboard>
  )
}