import { LinkContainer } from 'react-router-bootstrap'
import { Button, Col, Container } from 'react-bootstrap'
import PageTitle from '../components/PageTitle'
import Meta from '../components/Meta'
import useFetch from '../hooks/useFetch'
import { urlBuilder, addTagTitles } from '../js/helper'
import hljs from 'highlight.js'
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
  let body = ''


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
      
      body = highLight(node.body[0].value)
      
    } else {
      description = 'nothing here'
    }
    isLoading = false
  }

  
  /**
   * Add syntax highlighting to the pre elements of the body
   * @param {string} body - html of the body tag as a string
   * @returns {string}
   * TODO: read the classes of the pre,
   * to determin the language to use
   */
  function highLight(body) {
    const languages = ['sh','js','json','css','scss','docker','php','yml']
    
    const wrapper = document.createElement('div')
    wrapper.innerHTML = body
  
    for(const pre of wrapper.getElementsByTagName('pre')) {
      const lighted = hljs.highlightAuto(pre.innerText, languages)
      console.log('hljs', lighted)
      pre.classList.add('hljs', `lang-${lighted.language}`)
      pre.innerHTML = lighted.value
    }
    return wrapper.outerHTML
  }


  return (
    <>
      <Meta title={title} />
      <PageTitle head={description} description={title} isLoading={isLoading} />

      {status === 'fetched' && !!data.length &&
        <div id={`post-${nid}`} style={{ maxWidth: 685 }} className="post mx-auto px-3">

          {/* TODO: check dangerouslySetInnerHTML */}
          <div dangerouslySetInnerHTML={{ __html: body }} />

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