// button icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

import { useThemeContext } from '../hooks/useThemeContext';
import FaIcon from './FaIcon';


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
 * 
 * @param {String} options.more - url 
 * @returns 
 */
const BtnList = ({ data = [], options = {} }) => {

  // define button style by themeMode light/dark
  const { darkMode } = useThemeContext()
  let variant = (darkMode) ? "outline-" : ""


  return (
    <div className={`d-flex flex-wrap gap-2 ${options.className}`}>

      {data.map((item, index) => {
        const style = (item.style) ? item.style : 'primary'
        const active = item.active ? 'active' : ''
        const classes = item.className ? item.className : ''

        return (<Button
          as={options.as}
          size={options.size}
          onClick={() => options.onClick(item.title)} // stops propagation otherwise
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

      {options.more &&
        <LinkContainer to={options.more}>
          <Button variant={`${variant}secondary`} className="font-monospace flex-fill">
            <FaIcon name="more" />
          </Button>
        </LinkContainer>
      }
    </div>
  )
}

export default BtnList
