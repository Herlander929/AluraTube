
import styled from "styled-components"
import config from "../pages/config.json"

function HomePage() {

    return (
        <div style={{ backgroundColor: "red" }}>Fala rapeize!
            <Menu />
            <Header />
            <TimeLine playlists={config.playlists}/>
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

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100% 32px;
    gap:16px;

  }
  `;
function Header() {
    return (
        <StyledHeader>
            {/*             <img src="banner"></img>
 */}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`}></img>
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>

        </StyledHeader>
    )
}
function TimeLine(props) {

const playlistsNames = Object.keys(props.playlists);

    return (
        <div>
        {playlistsNames.map(function(playlistName)
        {
            return playlistName
        })}
        </div>
    )
}