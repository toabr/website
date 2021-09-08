import { useEffect } from "react"
import ApiService from "../js/ApiService"
import usePersistedState from "./usePersistedState"

export default function useAddTagValue(field_tags) {
  const [tagList, setTagList] = usePersistedState('tagList', [])

  useEffect(() => {
    !tagList.length && ApiService.getTags()
      .then(data => setTagList(data))
  }, [])

  if (!!tagList.length) {

    return field_tags.map(tag => {
      // find corresponding id in tag list
      const match = tagList.find(ele => ele.tid == tag.target_id)
      if(!match) return {} // ignore deletet tags
      return { ...tag, value: match.title }
    })
  }

  return []

}