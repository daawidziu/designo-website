import {Footer} from '../components/shared/_Footer';
import {Header} from '../components/shared/_Header';
import '../styles/core/globals.sass';

function App({Component, pageProps}) {
    return (
        <>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </>
    );
}

export default App;
