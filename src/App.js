import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'

// api call
import ApiService from './js/ApiService'

// Layout
import Layout from './layout/Layout'

// pages
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Wiki from './pages/Wiki'
import Post from './pages/Post'


const App = () => {
  const [showcaseData, setShowcaseData] = useState(JSON.parse(localStorage.getItem('showcaseData')) || [])

  useEffect(() => {
    const addLocale = data => data.map(set => {
      const created = new Date(set.created[0].value)
      set.created[0].locale = created.toLocaleDateString()

      const changed = new Date(set.changed[0].value)
      set.changed[0].locale = changed.toLocaleDateString()
      return set
    })

    const addTagTiles = async (showcaseData) => {
      // fetch full list of available tags
      const tagList = await ApiService.getTags()
      // iterate over all showcases and there tag list
      const output = showcaseData.map(showcase => {
        showcase.field_tags.map(tag => {
          // find corresponding title in tag list
          const match = tagList.find(ele => ele.tid == tag.target_id)
          tag.title = match.title
          return tag
        })
        return showcase
      })
      return output
    }

    const getShowcase = async () => {
      const output = await ApiService.getShowcase()
      console.log('showcaseData', output)
      return output
    }

    if(showcaseData.length < 1) {
      getShowcase()
        .then(data => addLocale(data))
        .then(data => addTagTiles(data))
        .then(data => {
          localStorage.setItem('showcaseData', JSON.stringify(data))
          setShowcaseData(data)
        })
    }

  }, [])

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/home' exact
            render={(props) => (
              <Home {...props} showcaseData={showcaseData} />
            )} />
          <Route path='/wiki' component={Wiki} />
          <Route path='/post/:nid' component={Post} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
