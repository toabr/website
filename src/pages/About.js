import './about.scss'

const About = () => {
  const year = new Date().getFullYear()
  return (
    <div id="about" className="d-flex flex-column justify-content-center text-light p-3">
      <div className="title display-5 mb-3">About me</div>
      <div className="border-top border-3 w-50 mb-3" />
      <p className="description ps-2">Als gelernter Mediengestalter übe ich meinen Beruf auf allen Ebenen mit Leidenschaft aus, ob Pixel, Vektor, Polygon oder Animation. Mein verstärktes Interesse gilt dabei aber der Webentwicklung.
      </p>
      <div className="position-fixed bottom-0">
        <p className="">
          <span className="text-muted">&copy; {year} </span>
          <span className="">toabr.de</span>
          <span className="text-muted">, All Rights Reserved.</span>
        </p>
      </div>
    </div>
  )
}

export default About