// router
import { BrowserRouter as Router } from 'react-router-dom'
import About from '../pages/About'

// components
import Footer from '../components/Footer'
import Navi from '../components/Navi'
import Hero from '../components/Hero'
import ScrollToTop from '../components/ScrollToTop'

const Layout = ({ children }) => {
  return (
    <Router>
      <div id="page" className="min-vh-100 overflow-hidden d-flex flex-column" >
        <Navi />
        <Hero />
        <ScrollToTop smooth />
        <main className="container" style={{ maxWidth: '1040px' }} >
          {children}
          <Footer />
        </main>
      </div>
      <About />
    </Router>
  )
}

export default Layout
