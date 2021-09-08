import { Col, Container, Row } from 'react-bootstrap'
import Article from './Article'

const Showcase = ({ data: showcaseData = [] }) => {
  // console.log('SHOWCASE RENDERS', showcaseData)
  return (
    <Container as="section" id="showcase" fluid className="p-0">
      <Row sm={12} className="mx-auto mb-4" style={{ maxWidth: '1040px' }}>
        <Col className="mb-4">
          <h2 className="border-bottom text-center pb-3 mb-4">Showcase</h2>
          {showcaseData.length > 0 && <Article variant="teaser" node={showcaseData[0]} />}
        </Col>
      </Row>
      {showcaseData.length > 0 &&
        <Row xs={1} md={2} lg={3} className="mx-auto pb-3 mb-4" style={{ maxWidth: '1040px' }}>
          <Col className="mb-4">
            <Article node={showcaseData[1]} />
          </Col>
          <Col className="mb-4">
            <Article node={showcaseData[2]} />
          </Col>
          <Col className="mb-4">
            <Article node={showcaseData[3]} />
          </Col>
        </Row>
      }
    </Container>
  )
}

export default Showcase