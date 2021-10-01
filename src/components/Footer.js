import { Nav } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'


const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer id="footer" className="container">
        <section className="d-flex flex-wrap justify-content-between align-items-center py-3 my-5">
          <p className="mb-0">
            <span className="text-muted">&copy; {year} </span>
            <span className="text-secondary">to</span>abr.de
            <span className="text-muted">, All Rights Reserved.</span>
          </p>

          <Nav className="justify-content-end">
            <LinkContainer to='/'>
              <Nav.Link className='text-muted'>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/wiki'>
              <Nav.Link className='text-muted'>Wiki</Nav.Link>
            </LinkContainer>
            <Nav.Link href="/home#contact" className="text-muted">Contact</Nav.Link>
          </Nav>

        </section>
      </footer>
    </>
  )
}

export default Footer
