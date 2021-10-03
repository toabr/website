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
import { useRef } from 'react'
import ScrollOnMount from '../components/ScrollOnMount'


/**
 * - a button list of all tags, the user can choose and combine 
 * - underneath a fetched list of respective node titles
 * @param {array} tagList - fetched list of tags from App.js
 * @param {string} query - starter tag from linked content
 */
const Wiki = () => {
  const [query, setQuery] = useQuery('q')
  const tagList = useTagList()
  const pageTitle = 'Code Snippets Wiki'
  const pageDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  const nodes = useRef() // cure against bouncyness @ fetch
  let isLoading = true

  /**
   * fetch articles respective to pressed buttons
   */
  const url = urlBuilder({ tags: encodeURI(query || ''), items: 10 })
  const { status, data, error } = useFetch(url)

  if (status === 'error') {
    console.error(error)
  }
  if (status === 'fetching') {
    isLoading = true
  }
  if (status === 'fetched') {
    nodes.current = data
    isLoading = false
    // if(window.scrollY < 300) window.scrollTo(0,300)
  }

  /**
   * tag btn was clicked
   */
  const tagBtnClick = (btn) => {
    const searchTerm = btn.dataset.title
    if (searchTerm.localeCompare(query, undefined, { sensitivity: 'accent' }) === 0) {
      setQuery('') // active btn was clicked
    } else {
      setQuery(btn.dataset.title.toLowerCase())
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
      <ScrollOnMount top />

      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Wiki' }]} />
      <PageTitle head={pageTitle} description={pageDescription} />

      <Container style={{ maxWidth: 685 }} className="">

        <BtnList data={btnListData} options={{
          size: 'sm',
          onClick: (e) => tagBtnClick(e.target), // e.target to specific
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
              {(query && !!nodes.current.length) && query}
              {(query && !nodes.current.length) && 'No Results'}
            </h2>
          }
        </div>

        {!!nodes.current?.length && <TitleList nodes={nodes.current} />}

      </Container>

    </div>
  )
}

export default Wiki