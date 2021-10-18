import React, { useRef, useState } from 'react';

import { Button, Form, InputGroup, Spinner, ListGroup } from 'react-bootstrap'

import SearchDefault from './SearchDefault';
import TitleList from './TitleList'

import useFetchNodes from '../hooks/useFetchNodes';
import { LinkContainer } from 'react-router-bootstrap';


/**
 * replaced the react-bootstrap-icons lib :)
 */
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" class="text-white">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z">
    </path>
  </svg>
)

/**
 * SITE SEARCH
 * input field & button for keyword search
 * default buttons for tag search
 * list of results between
 */
const Search = () => {

  const [query, setQuery] = useState('')
  const [activeTag, setActiveTag] = useState('')
  const inputGroup = useRef(null)
  const inputRef = useRef(null)


  /**
 * focus & scroll to search input
 */
  const scrollToSearch = () => window.scrollTo(0, 198)
  const blurSearch = () => inputGroup.current.classList.remove('focus')
  const focusSearch = () => {
    scrollToSearch()
    inputRef.current.focus()
    inputGroup.current.classList.add('focus')
  }


  /**
   * fetching when query || activeTag changes
   */
  const queryObj = (query || activeTag) ? {
    type: 'article',
    query: query,
    tags: activeTag,
    items: 10
  } : undefined
  const { nodes, isLoading } = useFetchNodes(queryObj)


  /**
   * trigger url rebuild > fetch
   * @param {string} type - who is triggering
   * @param {string} tag - needed from btn
   * FIXME: to hacky
   */
  const triggerFetch = (type, tag) => {
    if (type === 'BUTTON') {
      setQuery('')
      setActiveTag(tag)
      inputRef.current.value = tag
    } else if (type === 'FORM') {
      const query = inputRef.current.value
      query !== '' && setQuery(query)
      setActiveTag('')
    }
  }


  /**
   * sets the query string
   * @param {object} e - dom event
   */
  const onFormSubmit = (e) => {
    e.preventDefault()
    triggerFetch('FORM')
  }


  /**
   * tag btn was clicked set the active tag
   * @param {String} tag
   */
  const tagBtnClick = (tag) => {
    triggerFetch('BUTTON', tag)
    focusSearch(inputGroup.current)
  }


  return (
    <div id="search">
      <Form onSubmit={e => onFormSubmit(e)} className="">
        <InputGroup ref={inputGroup} className="shadow-slim" size="lg">

          <InputGroup.Text className="bg-accent-1 ps-2 pe-0">
            <Button
              size="sm"
              variant=""
              className="text-body pe-0"
              disabled >toabr.de /</Button>
          </InputGroup.Text>

          <Form.Control
            ref={inputRef}
            type="text"
            className="ps-1 shadow-none"
            placeholder="search ..."
            aria-label="search"
            aria-describedby="basic-addon1"
            // onChange={(e) => handleOnChange(e)}
            // value={searchTerm}
            readOnly={isLoading}
            onFocus={(e) => focusSearch(inputGroup.current)}
            onBlur={(e) => blurSearch(inputGroup.current)}
          />

          <Button
            variant="primary"
            id="search-btn"
            type="submit"
            className=""
            disabled={isLoading}>
            {isLoading ?
              <Spinner animation="grow" variant="white" size="sm" />
              :
              <SearchIcon className="text-white" />
            }
          </Button>
        </InputGroup>
      </Form>

      {((nodes !== null) && (!isLoading) && (!nodes.length)) &&
        <div className="pt-3">Nothing there 🙁</div>
      }

      {!!nodes?.length &&
        <TitleList nodes={nodes.slice(0, 5)} isLoading={isLoading} >
          {(nodes?.length > 5) &&
            <LinkContainer to={`/wiki?q=${activeTag || query}`}>
              <ListGroup.Item action className="text-body bg-body fw-bolder shadow text-center" >
                <span className="fs-5 lh-1 fw-bold">...</span>
              </ListGroup.Item>
            </LinkContainer >
          }
        </TitleList>
      }

      <SearchDefault
        onClick={tagBtnClick}
        activeTag={activeTag}
      />

    </div>
  )
}

export default Search
