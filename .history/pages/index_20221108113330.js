
import styled from "styled-components"
import config from "../pages/config.json"

function HomePage() {
    return (
        <div style={{ backgroundColor: "red" }}>Fala rapeize!
            <Menu />
            <Header />
            <TimeLine />
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

const styledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex
  }
  `;
function Header() {
    return (
        <styledHeader>
            {/*             <img src="banner"></img>
 */}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`}></img>
                {config.name}
                {config.job}
            </section>
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