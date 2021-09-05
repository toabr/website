import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'

// api call
import usePersistedState from './hooks/usePersistedState'
import ApiService from './js/ApiService'

// Layout
import Layout from './layout/Layout'

// pages
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Wiki from './pages/Wiki'
import Post from './pages/Post'
import { formatUTC, addTagTitles } from './js/helper'


const App = () => {
  const [showcaseData, setShowcaseData] = usePersistedState('showcaseData', [])
  const [tagList, setTagList] = usePersistedState('tagList', [])

  useEffect(() => {
    const addLocale = data => data.map(set => {
      set.created[0].locale = formatUTC(set.created[0].value)
      set.changed[0].locale = formatUTC(set.created[0].value)
      return set
    })

    const addTagTiles = async (data) => {
      const tags = (!tagList.length) ? await getTags() : tagList
      // add tag titles to node element
      return data.map(node => {
        node.field_tags = addTagTitles(node.field_tags, tags)
        return node
      })
    }

    const getShowcase = async () => await ApiService.getShowcase()

    const getTags = async () => {
      const output = await ApiService.getTags()
      setTagList(output)
      return output
    }

    if(!showcaseData.length) {
      getShowcase()
        .then(data => addLocale(data))
        .then(data => addTagTiles(data))
        .then(data => setShowcaseData(data))
    }

  }, [])

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/' exact
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
