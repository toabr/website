import { useHistory, useLocation } from "react-router-dom"

/**
 * TODO: could use window.location.search
 * without react router ...
 * https://github.com/oyalhi/use-clear-params/blob/main/src/use-query.tsx
 * @returns {object}
 */
function useQuery() {
  return new URLSearchParams(useLocation().search);
}


/**
   * get ids from the url query
   * query needs to be like wiki?q=61,44
   * but only the post tag buttons uses it for now
   * @param {string} param - query selector
   * @returns {array} - param0 function1
   * TODO: clean up for multi purpose !!
   */
function useLocationSearch(param) {
  const query = useQuery().get(param)
  const history = useHistory()

  // console.log(query)

  /**
   * @param {string} param 
   * FIXME: only usefull for 'q'
   */
  function setQuery(param) {
    const basePath = history.location.pathname
    history.push(`${basePath}?q=${param}`)
  }

  return [query, setQuery]
}

export { useLocationSearch as default, useQuery }