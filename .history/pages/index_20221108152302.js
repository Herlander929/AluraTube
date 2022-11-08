
import styled from "styled-components"
import config from "../pages/config.json"
import { CSSReset } from "../src/components/CSSReset"
import  Menu from "../src/components/Menu"
import { StyledTimeline } from "../src/components/Timeline"

function HomePage() {


    return (
        <>
            <CSSReset />
            <div style={{ backgroundColor: "" }}>Fala rapeize!
                <Menu />
                <Header />
                <TimeLine playlists={config.playlists} />
            </div>

        </>
    )
}

export default HomePage

/* 
function Menu() {
    return (
        <div>
            Menu
        </div>
    )
} */

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 55px;
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
        
       <StyledTimeline>
            {playlistsNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            }

                            )}
                        </div>
                    </section>
                )
            })}
            </StyledTimeline>
       
    )
}