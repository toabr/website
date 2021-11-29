import { Button, } from 'react-bootstrap'
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
import PageBreak from '../components/PageBreak'



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
  const pageTitle = 'Snippets Wiki'
  const pageDescription = 'Browse a bunch of code snippets by tag.'
  const itemsPerPage = 15


  /**
   * url query parameter
   */
  const queryObj = {
    tags: encodeURI(query || ''),
    type: 'article',
    by: 'changed',
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


  return (
    <div className="container-small mb-5">
      <Meta title={'toabr.de | Wiki'} />

      {(!!nodes?.length && (query || page) && !isLoading) &&
        window.scrollTo(0, 401)
      }

      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Wiki' }]} />
      <PageTitle head={pageTitle} description={pageDescription} />


      <BtnList data={btnListData} options={{
        size: 'sm',
        onClick: tagBtnClick,
        className: ""
      }} />

      <div className="mb-3">
        <PageBreak isLoading={isLoading} />
      </div>

      <div className="min-vh-50">
        {!!nodes?.length &&
          <TitleList nodes={nodes} isLoading={isLoading} />
        }

        {(nodes?.length > 0 && !isLoading) &&
          <PageNavigation
            prev={page > 0 && `/wiki?q=${query ?? ''}&page=${Number(page) - 1}`}
            next={nodes?.length === itemsPerPage && `/wiki?q=${query ?? ''}&page=${Number(page) + 1}`}
          />
        }
      </div>

    </div>
  )
}

export default Wiki