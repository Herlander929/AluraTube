import React from "react";


export const ColorModeContext = React.createContext({
    mode: "",
    setMode: () => {  alert("Você precisa me configurar primeiro")}
});

export default function ColorModeProvider(props){

    const [mode, setMode] = React.useState(props.initialMode);

    return (
        //Entender porquê está sendo ignorado
        <ColorModeContext.Provider value={{mode: mode, setMode: setMode}}>
            {props.children}
        </ColorModeContext.Provider>
    )
}