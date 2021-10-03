import { Nav } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'


const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer id="footer" className="container mx-auto" style={{ maxWidth: '1040px' }}>
        <section className="d-flex flex-wrap justify-content-center 
        justify-content-sm-between flex-row-reverse align-items-center 
        py-3 my-3">

          <Nav className="justify-content-end my-3">
            <LinkContainer to='/'>
              <Nav.Link className='text-muted'>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/wiki'>
              <Nav.Link className='text-muted'>Wiki</Nav.Link>
            </LinkContainer>
            <Nav.Link href="#contact" className="text-muted">Contact</Nav.Link>
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
