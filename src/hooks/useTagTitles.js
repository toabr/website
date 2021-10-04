import { useDataContext } from "./useDataContext"

/**
   * - traverse array of tag objects
   * - compare the tag id with a list from the server
   * - put the title property in the tag object
   * 
   * @param {array} fieldTags - node.field_tags from node
   * @param {array} tagList - separate title/id pair from server
   */
 export default function useTagTitles(fieldTags = []) {

  const tagList = useDataContext()

  return fieldTags.reduce((prev, curr) => {
    const match = tagList.find(ele => ele.tid == curr.target_id) // == because ele.tid is a String

    if (typeof match !== 'undefined') {
      return [...prev, { ...curr, title: match.title }]
    }else {
      return prev
    }

  },[])
}