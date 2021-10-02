import React from 'react';

// button icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { faDocker, faDrupal, faJs, faLinux, faReact, faSass } from '@fortawesome/free-brands-svg-icons'

import { useThemeContext } from '../hooks/useThemeContext';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const defaultData = [
  { title: "linux", id: ["linux"], faIcon: faLinux },
  { title: "drupal", id: ["drupal"], faIcon: faDrupal },
  { title: "es6", id: ["javascript"], faIcon: faJs },
  { title: "scss", id: ["scss"], faIcon: faSass },
  { title: "react", id: ["react"], faIcon: faReact },
  { title: "bash", id: ["bash"], faIcon: faHashtag },
  { title: "docker", id: ["docker"], faIcon: faDocker },
]


/**
 * 
 * @param {object} param0
 * 
 * @param {array} param0.data - array of objects
 * @param {string} data.title - 
 * @param {string} data.id - 
 * @param {string} data.faIcon - 
 * @param {string} data.className - undefined !?
 * @param {string} data.style - 
 * 
 * @param {object} param0.options - 
 * @param {string} options.size - 
 * @param {string} options.as - 
 * @param {string} options.className - undefined !?
 * @param {function} options.onClick - 
 * @returns 
 */
const BtnList = ({ data = defaultData, options = {}, children }) => {

  // define button style by themeMode light/dark
  const [themeMode] = useThemeContext()
  let variant = (themeMode === 'light') ? "" : "outline-"


  return (
    <div className={`d-flex flex-wrap gap-2 ${options.className}`}>

      {data.map((item, index) => {
        const style = (item.style) ? item.style : 'primary'
        return (<Button
          as={options.as}
          size={options.size}
          onClick={options.onClick}
          variant={variant + style}
          className={`${item.className} font-monospace flex-fill`}
          data-title={item.title}
          data-id={item.id}
          href={item.href}
          key={item.id}
        >
          {item.faIcon && <FontAwesomeIcon icon={item.faIcon} className="me-2" />}
          {item.title}
        </Button>)
      })}

      {options.more &&
        <LinkContainer to={options.more}>
          <Button variant={`${variant}secondary`} className="font-monospace flex-fill">
            ...
          </Button>
        </LinkContainer>
      }

    </div>
  )
}

export default BtnList