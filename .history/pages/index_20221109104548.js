
import React from "react"
import styled from "styled-components"
import config from "../pages/config.json"
import { CSSReset } from "../src/components/CSSReset"
import  Menu from "../src/components/Menu"
import { StyledTimeline } from "../src/components/Timeline"

function HomePage() {
     const [valorDoFiltro, setvalorDoFiltro] = React.useState("Angular");

    return (
        <>
            <CSSReset />
            <div style={{ backgroundColor: "" }}>
                {/* prop drilling */}
                <Menu valorDoFiltro={valorDoFiltro} setvalorDoFiltro={setvalorDoFiltro} />
                <Header />
                <TimeLine searchValue={valorDoFiltro}  playlists={config.playlists}>
                    consteúdo
                </TimeLine>
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
    
    display: flex;
    align-items: center;
    width: 100% 32px;
    gap:16px;

  }
  `;

  const StyledBanner = styled.div`
  background-color: blue ;
  height: 230px;
  `;
function Header() {
    return (
        <StyledHeader>
       <StyledBanner />
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

function TimeLine({searchValue, ...props}) {

    const playlistsNames = Object.keys(props.playlists);

    return (
        
       <StyledTimeline>
            {playlistsNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.filter((video) => {
                                const titleNormalized = video.title.toLowerCase();
                                const searchValueNormalized = searchValue.toLowerCase();
                                return titleNormalized.includes(searchValueNormalized)

                            }).map((video) => {
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