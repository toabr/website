import { useRef } from "react"
import useFetch from "./useFetch"

/**
   * url builder for version API_V2
   * @param {obj} param0 
   * @returns url
   */
const urlBuilder = ({
  nid = '', // just one unfortunately
  type = 'All', // article, work
  tags = [], // array of strings
  query = '', //string
  by = 'created', // created (+ sticky), changed, random (default)
  order = 'DESC', // DESC, ASC
  items = 10, // 5, 10, 25, 50
  page,
}) => {
  let url = `${process.env.REACT_APP_API_URL}/rest/v2/node?`
  if (nid) url += `_nid=${nid}&`
  if (type) url += `_type=${type}&`
  if (tags) url += `_tags=${tags.toString()}&`
  if (query) url += `_q=${query}&`
  if (by) url += `sort_by=${by}&`
  if (order) url += `sort_order=${order}&`
  if (items) url += `items_per_page=${items}&`
  if (page) url += `page=${page}&`
  return url
}


/**
 * FIXME: not working at all
 * @param {*} param0 
 * @returns 
 */
function useFetchNodes(query = {}) {

  const url = urlBuilder(query)
  const nodes = useRef([])
  let isLoading = true

  /**
   * hit the api
   */
  const { status, data, error } = useFetch(url)

  if (status === 'error') {
    console.error(error)
  }

  if (status === 'fetching') {
    isLoading = true
  }

  if (status === 'fetched') {
    nodes.current = data
    isLoading = false
  }

  return { nodes: nodes.current, isLoading }

}

export default useFetchNodes