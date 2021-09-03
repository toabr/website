import React, { useRef, useState } from 'react';
import { Button, Form, InputGroup, Spinner } from 'react-bootstrap'
import { Search as SearchIcon } from 'react-bootstrap-icons'

import ApiService from '../js/ApiService'
import SearchBtnList from './SearchBtnList';
import TitleList from './TitleList';



const Search = () => {
  const [articles, setArticles] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef(null)

  const queryArticles = (searchTerm) => {
    setArticles([])
    inputRef.current.readOnly = true

    setIsLoading(true)
    ApiService.articlesQuery(searchTerm)
      .then(data => {
        setArticles(data)
        setIsLoading(false)
        setSearchTerm('')
        inputRef.current.focus()
        inputRef.current.readOnly = false
        console.log('SearchResult', data)
      })
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.currentTarget.value)
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    // return on empty input 
    // TODO: message to the user
    if (searchTerm === '') {
      return
    }
    queryArticles(searchTerm)
  }

  const tagBtnAction = (term) => {
    setSearchTerm(term)
    queryArticles(term)
  }

  return (
    <div id="search">

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
            onChange={(e) => handleOnChange(e)}
            value={searchTerm}
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

      {TitleList(articles)}

      <SearchBtnList action={tagBtnAction}/>

    </div>
  )
}

export default Search
