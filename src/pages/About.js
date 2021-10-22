import { CodepenIcon, CoffeeIcon, GithubIcon, SketchfabIcon, VimeoIcon } from '../components/FaIcon'
import './about.scss'

const About = () => {
  return (
    <div id="about" className="d-flex flex-column justify-content-center text-light px-3">

      <div className="fw-light title">
        Hi, I'm
        <div className="mb-3 text-primary">
          <span className="text-white">To</span>rsten&nbsp;
          <span className="text-white">Abr</span>aham
        </div>
      </div>

      <div className="border-top border-3 border-primary w-50 mb-3" />

      <p className="description">
        <dl ClassName="fw-light">
          <dd>A web developer who enjoys:</dd>
          <dt>Rapid Prototyping</dt>
          <dt>Animating interfaces</dt>
          <dt>Fast Apps</dt>
          <dt>Hacking fl-stack</dt>
          <dt>Learning new stuff</dt>
          <dt>No semicolons</dt>

          <dd>Uses:</dd>
          <dt>HTML, CSS, JavaScript & <CoffeeIcon/></dt>

          <dd>And builds with:</dd>
          <dt>Linux, VsCode, Git, Bash, Docker, Drupal, Bootstrap, React</dt>

          <dt className="d-flex gap-4 mt-4 fs-3">
            <a href="https://github.com/toabr" target="_blank" rel="noreferrer" title="GitHub" alt="GitHub">
              <GithubIcon />
            </a>
            <a href="https://codepen.io/toabr" target="_blank" rel="noreferrer" title="Codepen" alt="Codepen">
              <CodepenIcon />
            </a>
            <a href="https://vimeo.com/toabr" target="_blank" rel="noreferrer" title="Vimeo" alt="Vimeo">
              <VimeoIcon />
            </a>
            <a href="https://sketchfab.com/toabr" target="_blank" rel="noreferrer" title="Sketchfab" alt="Sketchfab">
              <SketchfabIcon />
            </a>
          </dt>
        </dl>

      </p>
      <footer className="position-fixed bottom-0">
        <p className="mb-1 text-muted decoration-none">Photo by <a className="text-secondary decoration-none" rel="noreferrer" target="_blank" href="https://unsplash.com/@hikendal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kendal</a> on <a className="text-secondary decoration-none" rel="noreferrer" target="_blank" href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </p>
      </footer>
    </div>
  )
}

export default About