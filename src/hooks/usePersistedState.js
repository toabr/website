import { useEffect, useState } from 'react'

// to store the state to local storage
export default function usePersistedState(key, defaultValue) {
  const [state, setState] = useState(() => {

    const storedValue = JSON.parse(localStorage.getItem(key))

    if(storedValue === null) {
      return defaultValue
    } else {
      return storedValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}
