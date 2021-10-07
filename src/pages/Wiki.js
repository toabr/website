import { Container, Spinner, Button } from 'react-bootstrap'

import useFetch from '../hooks/useFetch'
import useQuery from '../hooks/useQuery'

import PageTitle from '../components/PageTitle'
import Meta from '../components/Meta'
import TitleList from '../components/TitleList'
import Breadcrumbs from '../components/Breadcrumbs'
import BtnList from '../components/BtnList'

import { useDataContext } from '../hooks/useDataContext'
import useFetchNodes from '../hooks/useFetchNodes'


/**
 * - a button list of all tags, the user can choose and combine 
 * - underneath a fetched list of respective node titles
 * @param {array} tagList - fetched list of tags from App.js
 * @param {string} query - trigger parameter for new fetch
 * TODO: pager
 */
const Wiki = () => {
  const tagList = useDataContext()
  const [query, setQuery] = useQuery('q') // fetch trigger
  const pageTitle = 'Code Snippets Wiki'
  const pageDescription = 
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'


  /**
   * url query parameter
   */
  const urlObj = {
    tags: encodeURI(query || ''),
    items: 10,
    // page: resultsPage // abandoned xD
  }

  const { nodes, isLoading } = useFetchNodes(urlObj)
  // console.log(nodes, isLoading)
  

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
    // console.log('render')
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
              {(query && !!nodes.length) && query}
              {(query && !nodes.length) && 'No Results'}
            </h2>
          }
        </div>

        {!!nodes.length &&
          <TitleList nodes={nodes}>
            {(nodes.length === 10) &&
              <Button
                variant="outline-primary"
                className="text-body bg-body text-center"
                // onClick={() => setResultsPage(prev => prev + 1)} 
                >
                <div className="title">more ...</div>
              </Button>
            }
          </TitleList>
        }

      </Container>

    </div>
  )
}

export default Wiki