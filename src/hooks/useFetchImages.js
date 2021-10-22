import useFetch from "./useFetch"


/**
 * adds the correct server address to the HTML
 * @param {Object} image 
 * @param {String} image.srcset_narrow - HTML <img ... >
 * @returns 
 */
function addBaseUrl(image) {
  if (!image.srcset_narrow) return image

  const wrapper = document.createElement('div')
  wrapper.innerHTML = image.srcset_narrow
  const img = wrapper.querySelector('img')

  // set img src 
  const src = img.getAttribute('src')
  img.setAttribute('src', process.env.REACT_APP_API_URL + src)

  // set img srcset 
  const srcset = img.getAttribute('srcset').split(', ').map(
    url => process.env.REACT_APP_API_URL + url)
  img.setAttribute('srcset', srcset)

  // console.log(srcset)
  return { ...image, srcset_narrow: img.outerHTML }
}


/**
 * fetch images per Node
 * @param {Number} nid
 * @param {Array} fids
 * @returns {Array}
 */
function useFetchImages({ nid, fids }) {
  let url = null
  const apiBase = `${process.env.REACT_APP_API_URL}/rest/v2/image`

  if (nid) url = `${apiBase}/${nid}`
  if (fids) url = `${apiBase}/all/${fids.toString()}`

  const { status, data: images, error } = useFetch(url)
  // console.log('data', images)

  if (status === 'error') {
    console.error(error)
  }

  if (status === 'fetching') {
  }

  if (status === 'fetched') {
    return images.map(image => addBaseUrl(image))
  }

  return images

}

export default useFetchImages