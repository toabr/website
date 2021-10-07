import { Container, Row, Col } from 'react-bootstrap'
import useFetch from '../hooks/useFetch'

import Meta from '../components/Meta'
import Search from '../components/Search'
import Showcase from '../components/Showcase'
import PageBreak from '../components/PageBreak'


/**
   * reorder server output
   */
function reorderNodes(nodes, list) {
  return nodes.map((node, index) => nodes.find(node => node.nid[0].value == list[index]))
}


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
      <Meta title="toabr.de | Home" />

      <Container fluid as="section" id="header" className="p-0 mb-5">
        <Row style={{ maxWidth: '1040px' }}
          className="mx-auto justify-content-center">
          <Col sm={11} md={10} lg={9} xl={8}>

            <header className="text-center my-3 py-3">
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