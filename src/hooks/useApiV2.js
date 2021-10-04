import useFetch from "./useFetch"

/**
 * FIXME: not working at all
 * @param {*} param0 
 * @returns 
 */
export default function useApiV2({ api = {} } = {}) {

  /**
   * url builder for version V2
   * @param {obj} param0 
   * @returns url
   */
  const urlBuilder = ({
    nid = '', // just one unfortunately
    type = 'All', // article, work
    tags = [], // array of strings
    query = '', //string
    by = 'created', // created, changed
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

  const url = urlBuilder({api})
  
  /**
   * hit the api
   */
  const response = useFetch(url)

  if (response.status === 'error') {
    console.error(response.error)
  }
  if (response.status === 'fetching') {
  }
  if (response.status === 'fetched') {
  }


  return response
}