import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App ({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}
