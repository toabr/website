import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Layout
import Layout from './layout/Layout'
import Hero from './components/Hero'
import ScrollToTop from './components/ScrollToTop'

// pages
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Wiki from './pages/Wiki'
import Post from './pages/Post'

// hooks
import usePersistedState from './hooks/usePersistedState'
import { ThemeProvider } from './hooks/useThemeContext'
import { DataProvider } from './hooks/useDataContext'

import ApiService from './js/ApiService'



const App = () => {

  // TODO: context provider!
  const [tagList, setTagList] = usePersistedState('tagList', [])

  /**
   * pre loads a list of published tags from the server
   * and saves them to the local cache
   * (nodes may carrie unpublished tags)
   * TODO: switch to api_v2
   */
  useEffect(() => {
    !tagList.length && ApiService.getTags()
      .then(data => setTagList(data))
  }, [])

  return (
    <Router>
      <ThemeProvider>
        <DataProvider>
          <Layout>
            <Hero />
            <ScrollToTop smooth />
            <Switch>
              <Route path='/' render={(props) => (<Home {...props} tagList={tagList} />)} exact />
              <Route path='/wiki' render={(props) => (<Wiki {...props} tagList={tagList} />)} />
              <Route path='/node/:nid' render={(props) => (<Post {...props} tagList={tagList} />)} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </DataProvider>
      </ThemeProvider>
    </Router>
  )
}

export default App
