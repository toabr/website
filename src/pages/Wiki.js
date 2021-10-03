import { useEffect, useState } from 'react'
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
  console.log('dingding', query)
  
  /**
   * read query from url and toggle respective btn
   */
  useEffect(() => {
    if (query) {
      const target = document.querySelector(`[data-title='${query}']`)
      target && tagBtnToggle(target)
    }
  }, [query])

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
    tagBtnToggle(btn)
  }

  /**
   * toggle active tag/button state
   * TODO: clear other btns
   */
  const tagBtnToggle = (btn) => {
    tagBtnClearAll()
    btn.classList.toggle('active')
  }

  /**
   * BAD AS FUCK BUT WORKS
   */
  const tagBtnClearAll = () => {
    const btnList = document.querySelectorAll('button[data-title]')
    for(const i in btnList) {
      btnList[i].classList?.remove('active')
    }
  }

  /**
   * prepare data array for <BtnList />
   */
  const buttonList = tagList.map(tag => (
    { title: tag.title, id: tag.tid }
  ))

  /**
   * content stuff
   */
  const pageTitle = 'Code Snippets Wiki'
  const pageDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'


  return (
    <div>
      <Meta title={pageTitle} />
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Wiki' }]} />
      <PageTitle head={pageTitle} description={pageDescription} />

      <Container style={{ maxWidth: 685 }} className="">

        <BtnList data={buttonList} options={{
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

        {!isLoading &&
          <h2 className="lead text-center text-capitalize">
            {query}
          </h2>
        }

        <TitleList nodes={nodes} />

      </Container>

    </div>
  )
}

export default Wiki