import { Container, Row, Col } from 'react-bootstrap'
import usePersistedState from '../hooks/usePersistedState'
import { useFetch } from '../hooks/useFetch'
import { formatUTC, urlBuilder } from '../js/helper'

import Meta from '../components/Meta'
import Hero from '../components/Hero'
import Search from '../components/Search'
import Showcase from '../components/Showcase'

const Home = () => {

  const [showcaseStore, setShowcaseStore] = usePersistedState('showcaseData', [])
  let showcaseData = showcaseStore

  const url = !showcaseData.length && urlBuilder({ type: 'work' })
  const { status, data: showcaseFetched, error } = useFetch(url)

  if (status === 'fetched') {
    showcaseData = addStuff(showcaseFetched)
    localStorage.setItem('showcaseData', JSON.stringify(showcaseFetched))
  }

  // TODO: refactor ...
  function addStuff(nodes) {
    const output = nodes.map(node => {

      // fomat dates
      node.created[0].locale = formatUTC(node.created[0].value)
      node.changed[0].locale = formatUTC(node.created[0].value)

      // TODO: get real tag names
      // node.field_tags = node.field_tags.map(tag => {
      //   const match = tagList.find(ele => ele.tid == tag.target_id)
      //   if(!match) return {} // ignore deletet tags
      //   return { ...tag, value: match.title }
      // })

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