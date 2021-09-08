import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Layout
import Layout from './layout/Layout'

// pages
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Wiki from './pages/Wiki'
import Post from './pages/Post'
import { useEffect } from 'react'
import ApiService from './js/ApiService'
import usePersistedState from './hooks/usePersistedState'


const App = () => {

  // TODO: context provider!
  const [tagList, setTagList] = usePersistedState('tagList', [])

  useEffect(() => {
    !tagList.length && ApiService.getTags()
      .then(data => setTagList(data))
  }, [])

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/' exact
            render={(props) => (
              <Home {...props} />
            )} />
          <Route path='/wiki' component={Wiki} />
          <Route path='/node/:nid' component={Post} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
