import React from "react";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CSSReset"
import ColorModeProvider, {ColorModeContext} from "../src/components/Menu/componentes/ColorMode";


const theme = {
    light: {
        backgroundBase: "#f9f9f9",
        backgroundLevel1: "#ffffff",
        backgroundLevel2: "#f0f0f0",
        borderBase: "#e5e5e5",
        textColorBase: "#222222",
    },
    dark: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF",
    }
};



// _app.js -> Definições globais fo NextJS
//ThemeProvider
function MyApp({Component, pageProps}) {
    const contexto = React.useContext(ColorModeContext)

    return(
    <ColorModeProvider initialMode = {"dark"}>
    <ThemeProvider theme={theme[contexto.mode]}>
     <CSSReset /> 
    <Component {...pageProps}/>
    </ThemeProvider>
    </ColorModeProvider>
    )
}

export default MyApp;