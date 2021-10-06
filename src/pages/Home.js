import { Container, Row, Col } from 'react-bootstrap'
import useFetch from '../hooks/useFetch'

import Meta from '../components/Meta'
import Search from '../components/Search'
import Showcase from '../components/Showcase'
import { reorderNodes } from '../js/helper'
import PageBreak from '../components/PageBreak'


const Home = () => {
  const ids = [85, 120, 86, 84, 87] // exact ids to fetch in order

  /**
   * FETCH
   */
  const url = `${process.env.REACT_APP_API_URL}/rest/v2/node/work/${ids.toString()}`
  const { status, data, error } = useFetch(url)

  if (status === 'fetched') {
    // ...
  }


  return (
    <>
      <Meta title="Home" />

      <Container fluid as="section" id="header" className="p-0 mb-5">
        <Row style={{ maxWidth: '1040px' }}
          className="mx-auto justify-content-center">
          <Col sm={11} md={10} lg={9} xl={8}>

            <header className="text-center mt-3 py-3">
              <h1 className="braces display-5 text-secondary">
                <span className="text-primary">to</span>
                <span className="">abr.de</span>
              </h1>
              <p className="py-2 mb-4">Explore a bunch of code snippets you may find helpful.</p>

              <Search />

            </header>

            <PageBreak />
            
          </Col>
        </Row>
      </Container>


      <Showcase nodes={reorderNodes(data, ids) || []} />
    </>
  )
}

export default Home