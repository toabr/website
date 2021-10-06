import { useEffect, useState } from "react"
import useFetch from "./useFetch"

function addBaseUrl(image) {
  if(!image.srcset_narrow) return image

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
  return img.outerHTML
}

/**
 * fetch images per Node
 * @param {Number} nid
 * @returns {Array}
 */
export default function useFetchImages(nid) {

  const url = nid && `${process.env.REACT_APP_API_URL}/rest/v2/image?nid=${nid}`

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