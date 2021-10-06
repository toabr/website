import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faVimeoV } from "@fortawesome/free-brands-svg-icons";
import { faBolt, faCube, faHashtag } from "@fortawesome/free-solid-svg-icons";

export default function FaIcon({name = '', className}) {
  const icon = {}

  switch (name.toLowerCase()) {
    case 'github': icon.fa =  faGithub; break
    case 'vimeo': icon.fa =  faVimeoV; break
    case 'sketchfab': icon.fa =  faCube; break
    case 'bolt': icon.fa =  faBolt; break
    default: icon.fa = faHashtag; break
  }

  return <FontAwesomeIcon icon={icon.fa} className={className} />
}