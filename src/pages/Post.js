
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import useFetch from '../hooks/useFetch'
import useTagTitles from '../hooks/useTagTitles';
import { useThemeContext } from '../hooks/useThemeContext';
import useFetchImages from '../hooks/useFetchImages';

import Meta from '../components/Meta'
import PageTitle from '../components/PageTitle'
import Breadcrumbs from '../components/Breadcrumbs'

import { urlBuilder, formatUTC } from '../js/helper'
import hljs from 'highlight.js'

import './post.scss'


/**
 * fetch and show one Post
 * and do stuff to the tagBtns ...
 * @param {array} tagList
 * @returns Post
 */
const Post = (props) => {

  // to define button style by theme light/dark
  const { darkMode } = useThemeContext()
  const variant = (darkMode) ? "outline-" : ""

  // initial values
  const nid = props.match.params.nid
  const title = `Post ${nid}`
  let isLoading = true // state of PageTitle

  // fetch node
  const url = urlBuilder({ nid })
  const { status, data, error } = useFetch(url)

  if (status === 'error') {
    console.error(error)
  }
  if (status === 'fetching') {
    isLoading = true
  }
  if (status === 'fetched') {
    isLoading = false
  }

  // set node data
  const node = data[0] || []
  const headline = node?.title ? node.title[0].value : ''
  const body = node?.body ? highLight(node.body[0].value) : ''
  const field_tags = useTagTitles(node.field_tags)
  const field_image = useFetchImages(nid) // fetchimg images


  /**
   * Add syntax highlighting to the pre elements of the body
   * @param {string} body - html of the body tag as a string
   * @returns {string}
   * TODO: read the classes of the pre,
   * to determin the language to use
   */
  function highLight(body) {
    const languages = ['sh', 'js', 'json', 'css', 'scss', 'docker', 'php', 'yml']

    const wrapper = document.createElement('div')
    wrapper.innerHTML = body

    for (const pre of wrapper.getElementsByTagName('pre')) {
      const lighted = hljs.highlightAuto(pre.innerText, languages)
      // console.log('hljs', lighted)
      pre.classList.add('hljs', `lang-${lighted.language}`)
      pre.innerHTML = lighted.value
    }
    return wrapper.innerHTML
  }


  return (
    <>
      <Meta title={title} />

      <Breadcrumbs
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Wiki', href: '/wiki' },
          { name: `Post ${nid}` }
        ]}
        className=""
      />

      <PageTitle head={headline} isLoading={isLoading} />

      {status === 'fetched' && !!data.length &&

        <div id={`Post-${nid}`}
          style={{ maxWidth: 1040 }}
          className="post mx-auto px-3">

          <div className="date text-center text-muted my-3">
            {formatUTC(node.created[0]?.value)}
          </div>

          {/* TODO: check dangerouslySetInnerHTML */}
          <div className="body" dangerouslySetInnerHTML={{ __html: body }} />

          <div className="field_images d-sm-flex justify-content-center mt-5">
            {!!field_image.length && field_image.map(image => (
              <div className="image px-sm-2 mb-3" dangerouslySetInnerHTML={{ __html: image }} />
            ))}
          </div>

          <footer className="footer my-5">
            {field_tags.map(nodeTag => (
              <Link to={`/wiki?q=${nodeTag.title}`} key={nodeTag.title} >
                <Button
                  variant={`${variant}primary`}
                  className="text-capitalize me-2 mb-2" >
                  #{nodeTag.title}
                </Button>
              </Link>
            ))}
          </footer>
        </div>
      }
    </>
  )
}

export default Post