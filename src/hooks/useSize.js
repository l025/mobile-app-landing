import { useEffect, useState } from "react"
const useSize = () => {
  const [windowSize, setWindowSize] = useState({
    height: null,
    width: null,
  })

  useEffect(() => {
    const windowSizeHandler = () => {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }
    windowSizeHandler()
    window.addEventListener("resize", windowSizeHandler)

    return () => {
      window.removeEventListener("resize", windowSizeHandler)
    }
  }, [])

  return windowSize
}

export default useSize
