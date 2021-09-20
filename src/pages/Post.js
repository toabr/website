import { LinkContainer } from 'react-router-bootstrap'

import { Button, Col, Container } from 'react-bootstrap'
import PageTitle from '../components/PageTitle'
import Meta from '../components/Meta'
import useFetch from '../hooks/useFetch'
import { urlBuilder, addTagTitles } from '../js/helper'

import './post.scss'

/**
 * fetch one Post and spit it out
 * and do stuff to the tagBtns
 * @param {array} tagList
 * @returns Post
 */
const Post = (props) => {

  const nid = props.match.params.nid
  const tagList = props.tagList
  const title = `Post ${nid}`
  let description = ''
  let isLoading = true // state of PageTitle


  const url = urlBuilder({ nid })
  const { status, data, error } = useFetch(url)
  const node = data[0]

  if (status === 'error') {
    console.error(error)
  }

  if (status === 'fetched') {
    if (!!data.length) {
      description = node.title[0].value
      // add tag titles
      node.field_tags = addTagTitles(node.field_tags, tagList)
    } else {
      description = 'nothing here'
    }
    isLoading = false
  }


  return (
    <>
      <Meta title={title} />
      <PageTitle head={description} description={title} isLoading={isLoading} />

      {status === 'fetched' && !!data.length &&
        <div id={`post-${nid}`} style={{ maxWidth: 685 }} className="post mx-auto px-3">

          {/* TODO: check dangerouslySetInnerHTML */}
          <div dangerouslySetInnerHTML={{ __html: node.body[0].value }} />

          <div className="my-3">
            {node.field_tags.map(nodeTag => (
              <LinkContainer to={{ pathname: "/wiki", state: { fromPost: nodeTag } }} >
                <Button variant="brand-primary" className="me-2" > #{nodeTag.title}</Button>
              </LinkContainer>
            ))}
          </div>
        </div>
      }
    </>
  )
}

export default Post