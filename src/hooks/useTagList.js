import { useEffect } from 'react'
import ApiService from '../js/ApiService'
import usePersistedState from './usePersistedState'

// to store the state to local storage
export default function useTagList() {
  const [tagList, setTagList] = usePersistedState('tagList', [])

  /**
   * pre loads a list of published tags from the server
   * and saves them to the local cache
   * (nodes may carrie unpublished tags)
   * TODO: switch to api_v2
   */
  useEffect(() => {
    !tagList.length && ApiService.getTags()
      .then(data => setTagList(data))
  }, [])

  return tagList
}