export const handleLocalStore = ({ key, value }) => {
  if (typeof (Storage) === "undefined") return;

  if (key && value) localStorage.setItem(key, value);
  return localStorage.getItem(key);
}

export const formatUTC = (date) => {
  const formated = new Date(date)
  return formated.toLocaleDateString()
}


export const orderByTitle = arr => {
  return arr.sort(function (a, b) {
    var nameA = a.title.toUpperCase(); // ignore upper and lowercase
    var nameB = b.title.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
}


/**
   * - traverse array of tag objects
   * - compare the tag id with a list from the server
   * - put the title property in the tag object
   * 
   * @param {array} fieldTags - node.field_tags from node
   * @param {array} tagList - separate title/id pair from server
   */
 export function addTagTitles(fieldTags = [], tagList = []) {

  return fieldTags.reduce((prev, curr) => {
    const match = tagList.find(ele => ele.tid == curr.target_id) // == because ele.tid is a String

    if (typeof match !== 'undefined') {
      return [...prev, { ...curr, title: match.title }]
    }else {
      return prev
    }

  },[])
}


/**
 * builds main fetching url depending on environment
 * @param {obj} param0 
 * @returns url
 */
export const urlBuilder = ({
  nid    = '', // just one unfortunately
  type   = 'All', // article, work
  tags   = [], // array of strings
  query  = '', //string
  by     = 'changed', // no choise
  order  = 'DESC', // DESC, ASC
  items  = 10, // 5, 10, 25, 50
  page,
}) => {
  let url = `${process.env.REACT_APP_API_URL}/rest/v2/node?`
  if (nid)    url += `_nid=${nid}&`
  if (type)   url += `_type=${type}&`
  if (tags)   url += `_tags=${tags.toString()}&`
  if (query)  url += `_q=${query}&`
  if (by)     url += `sort_by=${by}&`
  if (order)  url += `sort_order=${order}&`
  if (items)  url += `items_per_page=${items}&`
  if (page)   url += `page=${page}&`
  return url
}

