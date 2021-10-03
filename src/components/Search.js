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

  // TODO: reset tag on query string
  // query && stops fetching on first render
  const url = (query || activeTag) && urlBuilder({
    type: 'article',
    query: query,
    tags: activeTag,
    items: 5
  })
  const { status, data, error } = useFetch(url)
  const nodes = data

  const inputRef = useRef(null)

  let isLoading = false

  if (status === 'error') {
    console.error(error)
  }

  if (status === 'fetching') {
    inputRef.current.readOnly = true
    isLoading = true
  }

  if (status === 'fetched') {
    // inputRef.current.focus()
    inputRef.current.readOnly = false
    isLoading = false
  }

  /**
   * sets the query string
   * and triggers the useFetch 
   * @param {object} e - dom event
   */
  const onFormSubmit = (e) => {
    e.preventDefault()
    const query = inputRef.current.value
    setActiveTag('')
    query !== '' && setQuery(query)
  }

  /**
   * set the active tag
   * and triggers the useFetch
   * @param {String} tag
   */
  const tagBtnAction = (tag) => {
    setQuery('')
    setActiveTag(tag)
    inputRef.current.value = tag
  }

  return (
    <div id="search">
      <Form onSubmit={e => onFormSubmit(e)} className="">
        <InputGroup className="shadow-slim" size="lg">

          <InputGroup.Text className="bg-accent-1 ps-2 pe-0">
            <Button size="sm" variant="" className="text-body pe-0" disabled>toabr.de /</Button>
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

      {(status === 'fetched' && !nodes.length) && <div className="pt-3">Nothing there 🙁</div>}

      {!!nodes.length && <TitleList nodes={nodes} />}

      <SearchDefault onClick={tagBtnAction} activeTag={activeTag} />

    </div>
  )
}

export default Search
