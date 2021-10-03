import { Container, Spinner, } from 'react-bootstrap'

import useTagList from '../hooks/useTagList'
import useFetch from '../hooks/useFetch'
import useQuery from '../hooks/useQuery'

import PageTitle from '../components/PageTitle'
import Meta from '../components/Meta'
import TitleList from '../components/TitleList'
import Breadcrumbs from '../components/Breadcrumbs'
import BtnList from '../components/BtnList'

import { urlBuilder } from '../js/helper'


/**
 * - a button list of all tags, the user can choose and combine 
 * - underneath a fetched list of respective node titles
 * @param {array} tagList - fetched list of tags from App.js
 * @param {string} query - starter tag from linked content
 */
const Wiki = () => {
  const [query, setQuery] = useQuery('q')
  const tagList = useTagList()
  let isLoading = true
  const pageTitle = 'Code Snippets Wiki'
  const pageDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  // let btnListData = []

  /**
   * fetch articles respective to pressed buttons
   */
  const url = urlBuilder({ tags: encodeURI(query), items: 10 })
  const { status, data: nodes, error } = useFetch(url)

  if (status === 'fetched') {
    isLoading = false
  }

  /**
   * tag btn was clicked
   */
  const tagBtnClick = (btn) => {
    setQuery(btn.dataset.title)
  }

  /**
     * prepare data array for <BtnList />
     */
  const btnListData = tagList.map(tag => {
    // console.log('render')
    const active = (tag.title === query)
    return { title: tag.title, id: tag.tid, active }
  })


  return (
    <div>
      <Meta title={pageTitle} />
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Wiki' }]} />
      <PageTitle head={pageTitle} description={pageDescription} />

      <Container style={{ maxWidth: 685 }} className="">

        <BtnList data={btnListData} options={{
          size: 'sm',
          onClick: (e) => tagBtnClick(e.target), // e.target to specific
          className: "mb-5"
        }} />

        {isLoading &&
          <Spinner
            className="d-flex m-auto"
            animation="grow"
            variant="highlight"
            size="sm"
          />
        }

        {(!isLoading) &&
          <>
            <h2 className="lead text-center text-capitalize">
              {!!nodes.length ? query : 'No Results'}
            </h2>
            {!!nodes.length && <TitleList nodes={nodes} />}
          </>
        }

      </Container>

    </div>
  )
}

export default Wiki