import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const FeaturedGames = ({ gameData }) => {
    const { homeN, homeLogoN, resultN, awayLogoN, awayN, dateN, timeN, placeN, homeP, homeLogoP, resultP, awayLogoP, awayP, dateP, timeP, placeP } = gameData;
    return (
        <div>
            <h2>Następny mecz</h2>
            <p>{homeN}</p>
            <img src={`${homeLogoN}`} alt="" />
            <StaticImage
                src={`..${homeLogoN}`}
                width={300}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                style={{ marginBottom: `1.45rem` }}
            />


            <p>{resultN}</p>
            <img src={awayLogoN} alt="" />
            <p>{awayN}</p>
            <p>{dateN}</p>
            <p>{timeN}</p>
            <p>{placeN}</p>
            <h2>Poprzedni mecz</h2>
            <p>{homeP}</p>
            <img src={homeLogoP} alt="" />
            <p>{resultP}</p>
            <img src={awayLogoP} alt="" />
            <p>{awayP}</p>
            <p>{dateP}</p>
            <p>{timeP}</p>
            <p>{placeP}</p>


        </div>
    )
}

export default FeaturedGames;
