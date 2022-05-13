import { Navigation } from '../components/Navigation';
import '../styles/globals.css';
import { withPrepass } from '../src/withPrepass';
import { hydrateFetchStore } from '../src/myFetch';

function MyApp({ Component, pageProps, fetchStore }) {

  hydrateFetchStore(fetchStore)

  return <>
    <Navigation />
    <Component {...pageProps} />
  </>
}

export default withPrepass()(MyApp)
