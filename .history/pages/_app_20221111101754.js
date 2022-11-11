import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CSSReset"


function MyApp({Component, pageProps}) {
    const themeActive = {};

    return(
    <ThemeProvider theme={themeActive}>
     <CSSReset /> 
    <Component {...pageProps}/>
    </ThemeProvider>
    )
}

export default MyApp;