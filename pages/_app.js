import '@/styles/globals.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import LoadingBar from 'react-top-loading-bar'

export default function App({ Component, pageProps }) {
  const [progress, setProgress] = useState(0)
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', ()=> {
      setProgress(40)
    })
    router.events.on('routeChangeComplete', ()=> {
      setProgress(100)
    })
  })

  return (
    <>
      <LoadingBar
        color='#f11946'
        progress={progress}
        waitingTime={800}
        onLoaderFinished={() => setProgress(0)}
      />
      <Component {...pageProps} />
    </>
  )
}
