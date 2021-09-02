import { Container, Row, Col } from 'react-bootstrap'

import Meta from '../components/Meta'
import Hero from '../components/Hero'
import Search from '../components/Search'
import Showcase from '../components/Showcase'

const Home = ({showcaseData}) => {
  return (
    <>
      <Meta title="Home" />

      <Container fluid as="section" id="header" className="p-0">
        <Row style={{ maxWidth: '1040px' }} className="mx-auto justify-content-center">
          <Col sm={11} md={10} lg={9} xl={8}>
            <header className="text-center mb-5 py-3">
              <Hero />
              <Search />
            </header>
          </Col>
        </Row>
      </Container>

      <Showcase data={showcaseData} />
    </>
  )
}

export default Home