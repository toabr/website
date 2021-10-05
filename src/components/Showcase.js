import { Col, Container, Row } from 'react-bootstrap'
import Article from './ShowcaseArticle'

const Showcase = ({ nodes = [] }) => {
  // console.log('SHOWCASE RENDERS', nodes)
  return (
    <Container as="section" id="showcase" fluid className="p-0">
      <Row sm={12} className="mx-auto mb-4" style={{ maxWidth: '1040px' }}>
        <Col className="mb-4">
          <h2 className="text-center pb-3">Showcase</h2>
          {nodes[0] && <Article variant="teaser" node={nodes[0]} />}
        </Col>
      </Row>
      {nodes.length > 0 &&
        <Row xs={1} md={2} lg={3} className="mx-auto pb-3 mb-4" style={{ maxWidth: '1040px' }}>
          <Col className="mb-4">
            {nodes[1] && <Article node={nodes[1]} />}
          </Col>
          <Col className="mb-4">
            {nodes[2] && <Article node={nodes[2]} />}
          </Col>
          <Col className="mb-4">
            {nodes[3] && <Article node={nodes[3]} />}
          </Col>
        </Row>
      }
    </Container>
  )
}

export default Showcase