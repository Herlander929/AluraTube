
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
  function Header() {
    return (
        <div>
            <img src="banner"></img>
            <img src={`https://github.com/${config.github}`}></img>
            {config.name}
            {config.job}
            Cargo
        </div>
    )
  }
  function TimeLine() {
    return (
        <div>
            TimeLine
        </div>
    )
  }