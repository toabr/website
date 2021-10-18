import './about.scss'

const About = () => {
  return (
    <div id="about" className="d-flex flex-column justify-content-center text-light p-3">
      <div className="title display-5 mb-3">About me</div>
      <div className="border-top border-3 border-primary w-50 mb-3" />
      <p className="description ps-2">
        Als gelernter Mediengestalter übe ich meinen Beruf auf allen Ebenen mit Leidenschaft aus, ob Pixel, Vektor, Polygon oder Animation. Mein verstärktes Interesse gilt dabei aber der Webentwicklung.
      </p>
      <footer className="position-fixed bottom-0">
        <p className="text-muted decoration-none">Photo by <a className="text-secondary decoration-none" rel="noreferrer" target="_blank" href="https://unsplash.com/@hikendal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kendal</a> on <a className="text-secondary decoration-none" rel="noreferrer" target="_blank" href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </p>
      </footer>
    </div>
  )
}

export default About