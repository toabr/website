import { useEffect, useState } from 'react'
import { Button, Container, ListGroup, Spinner, } from 'react-bootstrap'

import useFetch from '../hooks/useFetch'

import PageTitle from '../components/PageTitle'
import Meta from '../components/Meta'
import { urlBuilder } from '../js/helper'
import TitleList from '../components/TitleList'
import useTagList from '../hooks/useTagList'
import Breadcrumbs from '../components/Breadcrumbs'
import BtnList from '../components/BtnList'


/**
 * - a button list of all tags, the user can choose and combine 
 * - underneath a fetched list of respective node titles
 * @param {array} props.tagList - fetched list of tags from App.js
 * @param {array} activeTags - list of tag id Numbers
 * @param {string} starterTag - starter tag from linked content
 */
const Wiki = (props) => {
  const [activeTags, setActiveTags] = useState([])
  const tagList = useTagList()
  let isLoading = true


  /**
   * set starterTag on mount
   * @param {object} fromPost - title & tid
   * FIXME: document.querySelector... could be more "reacty"
   */
  useEffect(() => {
    const tag = props.location?.state?.fromPost // for development
    if (typeof tag !== 'undefined') {
      // console.log('starterTag', tag)
      const btn = document.querySelector(`[data-id='${tag.target_id}']`)
      btn && toggleTag(btn)
    }
  }, [])


  /**
   * fetch articles respective to pressed buttons
   * @param {string} url
   * @param {array} nodes - fetched and rendered in content
   */
  const url = urlBuilder({ tags: encodeURI(activeTags), items: 10 })
  const { status, data: nodes, error } = useFetch(url)

  if (status === 'fetched') {
    isLoading = false
  }


  /**
   * toggle active tag/button state
   * @param {string} tagTitle - tag title
   * FIXME: btn... could be more "reacty"
   */
  const toggleTag = (btn) => {
    const tagTitle = btn.getAttribute("data-title")
    btn.classList.toggle('active')

    if (activeTags.includes(tagTitle)) {
      setActiveTags(prev => prev.filter((item) => item !== tagTitle))
    } else {
      setActiveTags(prev => [...prev, tagTitle])
    }
  }


  const buttonList = tagList.map(tag => (
    { title: tag.title, id: tag.tid }
  ))

  console.log(buttonList)


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
          onClick: (e) => toggleTag(e.target), // e.target to specific
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
            {!activeTags.length && 'Recent Posts'}
            {activeTags.toString()}
          </h2>
        }

        <TitleList nodes={nodes} />

      </Container>

    </div>
  )
}

export default Wiki