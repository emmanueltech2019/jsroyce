import '../styles/globals.css'
import React, {useState} from "react"
import Loader from '../components/Loader';
// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  React.useEffect(() => { 
    setTimeout(() => setLoading(true), 6000);
  }, []);

  return (
    <>
      {loading ? (
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default MyApp
