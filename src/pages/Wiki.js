import { Container, Spinner, Button, ListGroup } from 'react-bootstrap'

import useQuery from '../hooks/useQuery'

import PageTitle from '../components/PageTitle'
import Meta from '../components/Meta'
import TitleList from '../components/TitleList'
import Breadcrumbs from '../components/Breadcrumbs'
import BtnList from '../components/BtnList'

import { useDataContext } from '../hooks/useDataContext'
import useFetchNodes from '../hooks/useFetchNodes'
import { LinkContainer } from 'react-router-bootstrap'


/**
 * - a button list of all tags, the user can choose and combine 
 * - underneath a fetched list of respective node titles
 * @param {array} tagList - fetched list of tags from App.js
 * @param {string} query - trigger parameter for new fetch
 * TODO: pager
 */
const Wiki = (props) => {

  const tagList = useDataContext()
  const [query, setQuery] = useQuery('q') // fetch trigger
  const [page] = useQuery('page') || 0 // fetch trigger
  const pageTitle = 'Code Snippets Wiki'
  const pageDescription =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'


  /**
   * url query parameter
   */
  const queryObj = {
    tags: encodeURI(query || ''),
    items: 10,
    page: page
  }
  const { nodes, isLoading } = useFetchNodes(queryObj)


  /**
   * tag btn was clicked
   * @param {string} tag
   */
  const tagBtnClick = (tag) => {
    // compare clicked and active btn
    if (tag.localeCompare(query, undefined, { sensitivity: 'accent' }) === 0) {
      setQuery('') // active btn was clicked
    } else {
      setQuery(tag.toLowerCase())
    }
  }


  /**
   * prepare data array for <BtnList />
   */
  const btnListData = tagList.map(tag => {
    const active = (tag.title.toLowerCase() === query?.toLowerCase())
    return { title: tag.title, id: tag.tid, active }
  })


  return (
    <div>
      <Meta title={pageTitle} />

      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Wiki' }]} />
      <PageTitle head={pageTitle} description={pageDescription} />

      <Container style={{ maxWidth: 685 }} className="mb-5">

        <BtnList data={btnListData} options={{
          size: 'sm',
          onClick: tagBtnClick,
          className: "mb-5"
        }} />

        <div className="mb-3" style={{ minHeight: '2rem' }}>
          {isLoading &&
            <Spinner
              className="d-flex m-auto"
              animation="grow"
              variant="highlight"
              size="sm"
            />
          }

          {(!isLoading) &&
            <h2 className="lead text-center text-capitalize m-0">
              {(!query) && 'Recent Posts'}
              {(query && !!nodes?.length) && query}
              {(query && !nodes?.length) && 'No Results'}
            </h2>
          }
        </div>

        {!!nodes?.length &&
          <TitleList nodes={nodes}>
            {(nodes?.length === 10) &&
              <LinkContainer to={`/wiki?q=${query}&page=${Number(page)+1}`}>
                <ListGroup.Item action className="text-body bg-body fw-bolder shadow text-center" >
                  <span className="title">more ...</span>
                </ListGroup.Item>
              </LinkContainer >
            }
          </TitleList>
        }

      </Container>

    </div>
  )
}

export default Wiki