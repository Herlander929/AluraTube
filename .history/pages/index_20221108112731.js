
import styled from "styled-components"
import config from "../pages/config.json"

function HomePage() {
    return (
        <div style={{backgroundColor: "red"}}>Fala rapeize!
        <Menu/>
        <Header/>
        <TimeLine/>
        </div>
    )
  }
  
  export default HomePage


  function Menu() {
    return (
        <div>
            Menu
        </div>
    )
  }

  const styledHeader = style.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  `;
  function Header() {
    return (
        <styledHeader>
{/*             <img src="banner"></img>
 */}            <img src={`https://github.com/${config.github}.png`}></img>
            {config.name}
            {config.job}
            Cargo
        </styledHeader>
    )
  }
  function TimeLine() {
    return (
        <div>
            TimeLine
        </div>
    )
  }