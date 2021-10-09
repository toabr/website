import { Nav } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'
import PageBreak from "./PageBreak"


const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer id="footer">

        <PageBreak />

        <section className="d-flex flex-wrap justify-content-center 
        justify-content-sm-between flex-row-reverse align-items-center 
        pb-3 mb-3">

          <Nav className="justify-content-end my-3">
            <LinkContainer to='/'>
              <Nav.Link className='link-secondary'>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/wiki'>
              <Nav.Link className='link-secondary'>Wiki</Nav.Link>
            </LinkContainer>
            <Nav.Link href="#contact" className="link-secondary">Contact</Nav.Link>
          </Nav>

          <div className="text-muted mb-0">
            <i>&copy; {year} <span className="text-secondary">toabr.de</span> , All Rights Reserved.</i>
          </div>

        </section>
      </footer>
    </>
  )
}

export default Footer
