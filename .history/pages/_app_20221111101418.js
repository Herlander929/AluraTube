import { CSSReset } from "../src/components/CSSReset"


function MyApp({Component, pageProps}) {

    return(
        <>
     <CSSReset /> 
    <Component {...pageProps}/>
    </>
    )
}

export default MyApp;