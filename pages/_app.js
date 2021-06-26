import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as Fathom from 'fathom-client'

import "/src/styles/globals.css"
import "/src/styles/layout.css"

function JMichaliga({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    Fathom.load('EOHOGNHG', {
      includedDomains: ['jmichaliga.com', 'j13a.com', 'jmichaliga.github.io'],
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete)

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

export default JMichaliga
