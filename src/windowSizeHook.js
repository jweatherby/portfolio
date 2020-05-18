import { useState, useEffect } from 'react'

export const useWindowSize = () => {
  const [windowSize, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })
  const _setSize = () => {
    setSize({
      height: window.innerHeight,
      width: window.innerWidth,
    })
  }
  useEffect(() => {
    window.addEventListener('resize', _setSize)
    return () => {
      window.removeEventListener('resize', _setSize)
    }
  }, [])

  return windowSize
}
