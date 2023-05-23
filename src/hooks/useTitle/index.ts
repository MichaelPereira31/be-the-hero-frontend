import { useEffect } from 'react'

const prefix = 'Be The Hero |'

const useTitle = (title: string) => {
  useEffect(() => {
    window.document.title = `${prefix} ${title}`
  }, [title])
}

export default useTitle
