import React, { useRef, useState } from 'react';

import { Button, Form, InputGroup, Spinner, ListGroup } from 'react-bootstrap'
import { Search as SearchIcon } from 'react-bootstrap-icons'

import SearchDefault from './SearchDefault';
import TitleList from './TitleList'

import useFetchNodes from '../hooks/useFetchNodes';
import { LinkContainer } from 'react-router-bootstrap';


/**
 * SITE SEARCH
 * input field & button for keyword search
 * default buttons for tag search
 * list of results between
 */
const Search = () => {
  
  const [query, setQuery] = useState('')
  const [activeTag, setActiveTag] = useState('')
  const inputRef = useRef(null)


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
  }


  return (
    <div id="search">
      {console.log('render')}
      <Form onSubmit={e => onFormSubmit(e)} className="">
        <InputGroup className="shadow-slim" size="lg">

          <InputGroup.Text className="bg-accent-1 ps-2 pe-0">
            <Button
              size="sm"
              variant=""
              className="text-body pe-0"
              disabled
            >toabr.de /</Button>
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
            onFocus={(e) => window.scrollTo(0, 198)}
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
        <TitleList nodes={nodes.slice(0, 5)} >
          {(nodes?.length > 5) &&
            <LinkContainer to={`/wiki?q=${activeTag || query}`}>
              <ListGroup.Item action className="text-body bg-body fw-bolder shadow text-center" >
                <span className="title">more ...</span>
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
