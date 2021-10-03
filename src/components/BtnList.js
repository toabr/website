// button icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useThemeContext } from '../hooks/useThemeContext';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


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
const BtnList = ({ data = [], options = {}, more, children }) => {

  // define button style by themeMode light/dark
  const [themeMode] = useThemeContext()
  let variant = (themeMode === 'light') ? "" : "outline-"


  return (
    <div className={`d-flex flex-wrap gap-2 ${options.className}`}>

      {data.map((item, index) => {
        const style = (item.style) ? item.style : 'primary'
        const active = item.active ? 'active' : ''
        const classes = item.className ? item.className : ''

        return (<Button
          as={options.as}
          size={options.size}
          onClick={options.onClick}
          variant={variant + style}
          className={`${active} ${classes} text-capitalize font-monospace flex-fill`}
          data-title={item.title}
          data-id={item.id}
          href={item.href}
          key={item.id}
        >
          {item.faIcon && <FontAwesomeIcon icon={item.faIcon} className="me-2" />}
          {item.title}
        </Button>)
      })}

      {more &&
        <LinkContainer to={more.link || '#'}>
          <Button variant={`${variant}secondary`} className="font-monospace flex-fill">
            {more.title || '...'}
          </Button>
        </LinkContainer>
      }

      {children}

    </div>
  )
}

export default BtnList
