import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from "../components/Nav"
function MyApp({ Component, pageProps }) {
  return(
    <>
    <Header />
    <Nav />
     <Component {...pageProps} />
     <Footer />
     </>
  )
}

export default MyApp
