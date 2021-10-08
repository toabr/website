import { useRef } from 'react'

import { Container, Spinner, Button, } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import FaIcon from '../components/FaIcon'

import useQuery from '../hooks/useQuery'
import useFetchNodes from '../hooks/useFetchNodes'
import { useDataContext } from '../hooks/useDataContext'
import { useThemeContext } from '../hooks/useThemeContext'

import Meta from '../components/Meta'
import PageTitle from '../components/PageTitle'
import Breadcrumbs from '../components/Breadcrumbs'
import TitleList from '../components/TitleList'
import BtnList from '../components/BtnList'



/**
 * wiki navigation buttons
 * @param {String} next - url
 * @param {String} prev - url
 * @returns 
 */
function PageNavigation({ next, prev }) {
  // to define button style by theme light/dark
  const { darkMode } = useThemeContext()
  const variant = (darkMode) ? "outline-" : ""

  if (!next && !prev) return null

  return (
    <div className="d-flex gap-0 justify-content-center pt-0 px-0">
      {prev &&
        <LinkContainer to={prev}>
          <Button variant={`${variant}primary`} size="sm" className="flex-fill">
            <FaIcon name="arrowleft" />
          </Button>
        </LinkContainer>
      }
      {next &&
        <LinkContainer to={next}>
          <Button variant={`${variant}primary`} size="sm" className="flex-fill">
            <FaIcon name="arrowright" />
          </Button>
        </LinkContainer>
      }
    </div>
  )
}


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
  const [page] = useQuery('page') // fetch trigger
  const pageTitle = 'Code Snippets Wiki'
  const pageDescription =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  const subHead = useRef(null)
  const itemsPerPage = 15


  /**
   * url query parameter
   */
  const queryObj = {
    tags: encodeURI(query || ''),
    items: itemsPerPage,
    page: page || 0
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


  /**
   * scroll to loading animation on fetch
   * TODO: think about it :)
   */
  function ScrolyMoly() {
    const top = subHead.current?.offsetTop - 85
    if (top && (query || page) && !isLoading) {
      window.scrollTo(0, top)
    }
  }


  return (
    <div>
      <Meta title={pageTitle} />

      {ScrolyMoly()}

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
            <h2 ref={subHead} className="lead text-center text-capitalize m-0">
              {(!query) && 'Recent Posts'}
              {(query && !!nodes?.length) && query}
              {(query && !nodes?.length) && 'No Results'}
            </h2>
          }
        </div>

        {!!nodes?.length && <TitleList nodes={nodes} />}

        {/* FIXME: hopping during fetching : State? */}
        {(nodes?.length > 0 && !isLoading) &&
          <PageNavigation
            prev={page > 0 && `/wiki?q=${query ?? ''}&page=${Number(page) - 1}`}
            next={nodes?.length === itemsPerPage && `/wiki?q=${query ?? ''}&page=${Number(page) + 1}`}
          />
        }


      </Container>

    </div>
  )
}

export default Wiki