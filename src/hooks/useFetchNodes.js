import { useRef } from "react"
import useFetch from "./useFetch"
import { formatUTC } from "../js/helper"

/**
   * url builder for version API_V2
   * @param {obj} param0 
   * @returns url
   * TODO: better is better
   */
export const urlBuilder = ({
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
 * add readable time stampes to the nodes
 * @param {Array} nodes 
 * @returns 
 */
function addLocalDate(nodes = []) {
  return nodes.map(node => {
    node.created[0].locale = formatUTC(node.created[0].value)
    return node
  })
}


/**
 * builds a query fetches nodes,
 * and adds two or more things
 * @param {Object} param0 - query object
 * @returns {Null || Array}
 */
function useFetchNodes(query) {

  const url = query && urlBuilder(query)
  const nodes = useRef(null) // provide prev between render
  let isLoading = false

  /**
   * hit the api
   */
  const { status, data, error } = useFetch(url)

  if (status === 'error') {
    console.error(error)
  }

  if (status === 'idle') {
  }

  if (status === 'fetching') {
    isLoading = true
  }

  if (status === 'fetched') {
    nodes.current = data
    if (!!data.length) {
      nodes.current = addLocalDate(data)
    }
    isLoading = false
  }

  return { nodes: nodes.current, isLoading }

}

export default useFetchNodes