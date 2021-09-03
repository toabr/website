import React, { useRef, useState } from 'react';
import { Button, Form, InputGroup, Spinner } from 'react-bootstrap'
import { Search as SearchIcon } from 'react-bootstrap-icons'

// button icons
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { faDocker, faDrupal, faJs, faLinux, faReact, faSass } from '@fortawesome/free-brands-svg-icons'

// API
import ApiService from '../js/ApiService'
import PreviewBtnList from './PreviewBtnList';
import TitleList from './TitleList';


const Search = () => {
  const [articles, setArticles] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef(null)

  const previewBtnData = [
    { title: "linux", faIcon: faLinux },
    { title: "drupal", faIcon: faDrupal },
    { title: "es6", faIcon: faJs },
    { title: "scss", faIcon: faSass },
    { title: "react", faIcon: faReact },
    { title: "bash", faIcon: faHashtag },
    { title: "docker", faIcon: faDocker },
    { title: "...", faIcon: "" }
  ]

  const queryArticles = (searchTerm) => {
    setArticles([])
    inputRef.current.readOnly = true
    if (searchTerm === '') return
    setIsLoading(true)
    ApiService.articlesQuery(searchTerm)
      .then(data => {
        setArticles(data)
        setIsLoading(false)
        setSearchTerm('')
        inputRef.current.focus()
        inputRef.current.readOnly = false
        console.log(data)
      })
  }

  const previewBtnAction = (term) => {
    setSearchTerm(term)
    queryArticles(term)
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.currentTarget.value)
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    queryArticles(searchTerm)
  }

  return (
    <div id="search">

      <Form onSubmit={e => onFormSubmit(e)} className="">
        <InputGroup className="shadow" size="lg">
          <InputGroup.Text className="bg-white text-muted ps-2 pe-0">
            <Button size="sm" variant="" disabled>toabr.de /</Button>
          </InputGroup.Text>

          <Form.Control
            ref={inputRef}
            type="text"
            className="ps-0 shadow-none fs-4"
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

      <div className="d-flex flex-wrap gap-2 mb-3">
        {PreviewBtnList({ arr: previewBtnData, action: previewBtnAction })}
      </div>

    </div>
  )
}

export default Search
