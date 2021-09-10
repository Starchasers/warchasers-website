import { useEffect } from 'react'
import TagManager from 'react-gtm-module'

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID
const GTM_AUTH = process.env.NEXT_PUBLIC_GTM_AUTH
const GTM_ENV = process.env.NEXT_PUBLIC_GTM_ENV
const environment = process.env.NODE_ENV
const ENV_SET = !!(GTM_AUTH && GTM_ENV && GTM_ID)

let GTM_Warning = false

if (environment !== 'development' && !ENV_SET) {
  if (!GTM_Warning) {
    console.warn('No GTM environment set')
    GTM_Warning = true
  }
}

export const useGoogleTagManager = () => {
  useEffect(() => {
    if (ENV_SET) {
      TagManager.initialize({ gtmId: GTM_ID, auth: GTM_AUTH, preview: GTM_ENV })
    }
  }, [])
}
