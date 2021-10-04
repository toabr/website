import React, { useRef, useState } from 'react';

import { Button, Form, InputGroup, Spinner } from 'react-bootstrap'
import { Search as SearchIcon } from 'react-bootstrap-icons'

import useFetch from '../hooks/useFetch'

import SearchDefault from './SearchDefault';
import TitleList from './TitleList'

import { urlBuilder } from '../js/helper'


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
  let isLoading = false
  const nodes = useRef([]) // saves nodes between fetches

  /**
   * fetching when query || activeTag changes
   */
  const url = (query || activeTag) && urlBuilder(
    { type: 'article', query: query, tags: activeTag, items: 10 })

  const { status, data, error } = useFetch(url)

  if (status === 'error') {
    console.error(error)
  }
  if (status === 'fetching') {
    inputRef.current.readOnly = true
    isLoading = true
  }
  if (status === 'fetched') {
    // inputRef.current.focus()
    nodes.current = [...data]
    inputRef.current.readOnly = false
    isLoading = false
  }

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
            readOnly={false}
            onFocus={(e) => window.scrollTo(0,198)}
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

      {(status === 'fetched' && !nodes.current?.length) &&
        <div className="pt-3">Nothing there 🙁</div>
      }

      {!!nodes.current?.length &&
        <TitleList
          nodes={nodes.current.slice(0,5)}
          more={(nodes.current?.length > 5) && `/wiki?q=${activeTag || query}`}
        />}

      <SearchDefault
        onClick={tagBtnClick}
        activeTag={activeTag}
      />

    </div>
  )
}

export default Search
