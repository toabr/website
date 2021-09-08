import React, { useRef, useState } from 'react';
import { Button, Form, InputGroup, Spinner } from 'react-bootstrap'
import { Search as SearchIcon } from 'react-bootstrap-icons'
import { useFetch } from '../hooks/useFetch';
import { urlBuilder } from '../js/helper';

import SearchBtnList from './SearchBtnList';
import TitleList from './TitleList';



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

  const onFormSubmit = (e) => {
    e.preventDefault()
    const query = inputRef.current.value
    setActiveTag('')
    query !== '' && setQuery(query)
  }

  const tagBtnAction = (tag) => {
    setQuery('')
    setActiveTag(tag)
    inputRef.current.value = tag
  }

  return (
    <div id="search">
      .
      <Form onSubmit={e => onFormSubmit(e)} className="">
        <InputGroup className="shadow" size="lg">

          <InputGroup.Text className="bg-white text-muted ps-2 pe-0">
            <Button size="sm" variant="" className="pe-0" disabled>toabr.de /</Button>
          </InputGroup.Text>

          <Form.Control
            ref={inputRef}
            type="text"
            className="ps-1 shadow-none fs-4"
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

      <SearchBtnList action={tagBtnAction} className="my-4" />

    </div>
  )
}

export default Search
