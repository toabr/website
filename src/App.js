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
import Hero from './components/Hero'


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
        <Hero />
        <Switch>
          <Route path='/' render={(props) => (<Home {...props} tagList={tagList} />)} exact />
          <Route path='/wiki' render={(props) => (<Wiki {...props} tagList={tagList} />)} />
          <Route path='/node/:nid' render={(props) => (<Post {...props} tagList={tagList} />)} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
