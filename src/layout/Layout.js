// router
import { BrowserRouter as Router } from 'react-router-dom'
import About from '../pages/About'

// components
import Footer from '../components/Footer'
import Navi from '../components/Navi'

const Layout = ({ children }) => {
  return (
    <Router>
      <div id="page" className="min-vh-100 d-flex flex-column" >
        <Navi />
        <main>{children}</main>
        <Footer />
      </div>
      <About />
    </Router>
  )
}

export default Layout
