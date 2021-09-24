import { useEffect, useState } from 'react'
import { Button, Container, ListGroup, Spinner, } from 'react-bootstrap'

import useFetch from '../hooks/useFetch'

import PageTitle from '../components/PageTitle'
import Meta from '../components/Meta'
import { urlBuilder } from '../js/helper'
import TitleList from '../components/TitleList'
import useTagList from '../hooks/useTagList'


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
      const btn = document.querySelector(`[data-tid='${tag.target_id}']`)
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


  /**
   * content stuff
   */
  const pageTitle = 'Code Snippets Wiki'
  const pageDescription = 'explore'


  return (
    <div>
      <Meta title={pageTitle} />
      <PageTitle head={pageTitle} description={pageDescription} />

      <Container style={{ maxWidth: 685 }} className="">

        <div className="d-flex flex-wrap gap-2 mb-5">
          {tagList.map(tag => ( // print tags out
            <Button
              variant="brand-primary"
              size="sm"
              className="flex-fill"
              data-title={tag.title}
              data-tid={tag.tid}
              onClick={(e) => toggleTag(e.target)}
            >
              {tag.title}
            </Button>
          ))}
        </div>

        {isLoading && <Spinner className="d-flex m-auto" animation="grow" variant="" size="sm" />}

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