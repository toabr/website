import { Route, Switch } from 'react-router-dom'

// Layout
import Layout from './layout/Layout'

// pages
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Wiki from './pages/Wiki'
import Post from './pages/Post'

// hooks
import { ThemeProvider } from './hooks/useThemeContext'
import { DataProvider } from './hooks/useDataContext'


const App = () => {

  return (
      <ThemeProvider>
        <DataProvider>
          <Layout>
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/wiki' component={Wiki} />
              <Route path='/node/:nid' component={Post} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </DataProvider>
      </ThemeProvider>
  )
}

export default App
