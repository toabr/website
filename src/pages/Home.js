import { Container, Row, Col } from 'react-bootstrap'
import usePersistedState from '../hooks/usePersistedState'
import useFetch from '../hooks/useFetch'
import { formatUTC, urlBuilder } from '../js/helper'

import Meta from '../components/Meta'
import Hero from '../components/Hero'
import Search from '../components/Search'
import Showcase from '../components/Showcase'


const Home = () => {

  /**
   * use the store or fetch and save to the store
   */
  const ids = [87, 86, 85, 84] // exact ids to fetch in order
  const [showcaseStore, setShowcaseStore] = usePersistedState('showcaseData', [])
  let showcaseData = showcaseStore

  const url = !showcaseData.length &&
    `${process.env.REACT_APP_API_URL}/rest/v2/node/work/${ids.toString()}`

  const { status, data: showcaseFetched, error } = useFetch(url)

  if (status === 'fetched') {
    let output = addStuff(showcaseFetched)
    output = reorderNodes(output, ids)
    showcaseData = [...output]

    // not setShowcaseStore because of infinit rerender
    localStorage.setItem('showcaseData', JSON.stringify(output))
  }


  /**
   * reorder server output
   */
  function reorderNodes(nodes, ids) {
    return nodes.map((node, index) => nodes.find(node => node.nid[0].value == ids[index]))
  }


  /**
   * process server output
   */
  function addStuff(nodes) {
    const output = nodes.map(node => {

      node.created[0].locale = formatUTC(node.created[0].value) // format created dates
      node.changed[0].locale = formatUTC(node.changed[0].value) // format changed date

      // TODO: insert tag titles

      return node
    })
    return output
  }



  return (
    <>
      <Meta title="Home" />

      <Container fluid as="section" id="header" className="p-0">
        <Row style={{ maxWidth: '1040px' }} className="mx-auto justify-content-center">
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

      <Showcase data={showcaseData} />
    </>
  )
}

export default Home