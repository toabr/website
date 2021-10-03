import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { faDocker, faDrupal, faJs, faLinux, faReact, faSass } from '@fortawesome/free-brands-svg-icons'

import BtnList from "./BtnList"

const btnData = [
  { title: "linux", id: ["linux"], faIcon: faLinux },
  { title: "drupal", id: ["drupal"], faIcon: faDrupal },
  { title: "es6", id: ["javascript"], faIcon: faJs },
  { title: "scss", id: ["scss"], faIcon: faSass },
  { title: "react", id: ["react"], faIcon: faReact },
  { title: "bash", id: ["bash"], faIcon: faHashtag },
  { title: "docker", id: ["docker"], faIcon: faDocker },
]

function SearchDefault({ onClick, activeTag }) {

  /**
   * prepare data array for <BtnList />
   */
  const btnList = btnData.map(btn => {
    const active = (btn.id[0] === activeTag)
    return { ...btn, active }
  })

  return (
    <BtnList
      data={btnList}
      options={{
        onClick: (e) => onClick(e.target.dataset.id),
        className: 'my-4',
      }}
      more={{ link: '/wiki' }}
    />
  )
}

export default SearchDefault