import { Container, Row, Col } from 'react-bootstrap'
import usePersistedState from '../hooks/usePersistedState'
import useFetch from '../hooks/useFetch'
import { formatUTC } from '../js/helper'

import Meta from '../components/Meta'
import Search from '../components/Search'
import Showcase from '../components/Showcase'


const Home = () => {
  const ids = [120, 86, 85, 84, 87] // exact ids to fetch in order

  /**
   * look up local store
   */
  // const [showcase, setShowcase] = usePersistedState('showcase', [])


  /**
   * FETCH
   */
  const url = `${process.env.REACT_APP_API_URL}/rest/v2/node/work/${ids.toString()}`

  const { status, data, error } = useFetch(url)

  if (status === 'fetched') {
    // not setShowcaseStore because of infinit rerender
    // localStorage.setItem('showcase', JSON.stringify(data))
  }


  /**
   * reorder server output
   */
  function reorderNodes(nodes, ids) {
    return nodes.map((node, index) => nodes.find(node => node.nid[0].value == ids[index]))
  }


  return (
    <>
      <Meta title="Home" />

      <Container fluid as="section" id="header" className="p-0">
        <Row style={{ maxWidth: '1040px' }}
          className="mx-auto justify-content-center">
          <Col sm={11} md={10} lg={9} xl={8}>

            <header className="text-center mt-3 mb-4 py-3">
              <h1 className="braces display-5 text-secondary">
                <span className="text-primary">to</span>
                <span className="">abr.de</span>
              </h1>
              <p className="py-2 mb-4">Explore a bunch of code snippets you may find helpful.</p>
              <Search />
            </header>

          </Col>
        </Row>
      </Container>

      <Showcase nodes={data || []} />
    </>
  )
}

export default Home