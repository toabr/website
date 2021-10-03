
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import { useThemeContext } from '../hooks/useThemeContext';
import useFetch from '../hooks/useFetch'

import PageTitle from '../components/PageTitle'
import Meta from '../components/Meta'
import Breadcrumbs from '../components/Breadcrumbs'

import { urlBuilder, addTagTitles, formatUTC } from '../js/helper'
import hljs from 'highlight.js'
// import './post.scss'


/**
 * fetch and show one Post
 * and do stuff to the tagBtns ...
 * @param {array} tagList
 * @returns Post
 */
const Post = (props) => {

  const [themeMode] = useThemeContext()
  // to define button style by theme light/dark
  const variant = (themeMode === 'light') ? "" : "outline-"

  const nid = props.match.params.nid
  const tagList = props.tagList
  const title = `Post ${nid}`
  let headline = ''
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
      headline = node.title[0].value
      // add tag titles
      node.field_tags = addTagTitles(node.field_tags, tagList)

      body = highLight(node.body[0].value)

    } else {
      headline = 'nothing here'
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
    const languages = ['sh', 'js', 'json', 'css', 'scss', 'docker', 'php', 'yml']

    const wrapper = document.createElement('div')
    wrapper.innerHTML = body

    for (const pre of wrapper.getElementsByTagName('pre')) {
      const lighted = hljs.highlightAuto(pre.innerText, languages)
      // console.log('hljs', lighted)
      pre.classList.add('hljs', `lang-${lighted.language}`)
      pre.innerHTML = lighted.value
    }
    return wrapper.outerHTML
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

        <div id={`post-${nid}`}
          style={{ maxWidth: 685 }}
          className="post mx-auto px-3">

          <div className="date text-center text-muted my-3">
            {formatUTC(node.created[0].value)}
          </div>

          {/* TODO: check dangerouslySetInnerHTML */}
          <div dangerouslySetInnerHTML={{ __html: body }} />

          <div className="footer my-5">
            {node.field_tags.map(nodeTag => (
              <Link to={`/wiki?q=${nodeTag.title}`} >
                <Button
                  variant={`${variant}primary`}
                  className="me-2 mb-2" >
                  #{nodeTag.title}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      }
    </>
  )
}

export default Post