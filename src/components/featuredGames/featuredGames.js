import React from 'react'
import { StaticImage } from "gatsby-plugin-image";
import styled from 'styled-components';

const Card = styled.div`
    background-color: white;
    border-radius: 7px;
    padding:1.5rem;
    -webkit-box-shadow: 4px 4px 6px 0px rgba(50, 50, 50, 0.16);
    -moz-box-shadow:    4px 4px 6px 0px rgba(50, 50, 50, 0.16);
    box-shadow:         4px 4px 6px 0px rgba(50, 50, 50, 0.16);
    text-align: center;
    display: flex;
    justify-content: space-around;
     @media (max-width: 991.98px){
        flex-direction: column;
        align-items: center;
    }
    `
const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width:49%;
   
 
`
const GameTitle = styled.h3`
    text-transform: uppercase;
    color: #616161;
    font-size: 1.1rem;
`
const LeagueName = styled.span`
    color:#16A17C;
    text-transform: uppercase;
`
const TeamsSection = styled.div`
    display:grid;
    grid-template-columns: 3fr 1fr 1fr 1fr 3fr;
`
const Name = styled.span`
    padding:0.5rem;
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 1.3rem;
`
const TeamLogo = styled.img`
    height: 55px;
    width: auto;
`
const GameInfoSection = styled.div`
    display: flex;
    justify-content:space-around;
    margin-top: 0.7rem;
    
`
const InfoElement = styled.div`
    text-transform: uppercase;
`

const Divider = styled.div`
    border-left:1px solid #EBEBEB; 
    height: 150px; 
    width: 0;
    @media (max-width: 991.98px){
        display: none;
    }
`
const DividerSm = styled.div`
    border-left:1px solid #EBEBEB;
    height: 20px;
    width: 0;
`


const FeaturedGames = ({ gameData }) => {
    const { homeN, homeLogoN, resultN, awayLogoN, awayN, dateN, timeN, placeN, homeP, homeLogoP, resultP, awayLogoP, awayP, dateP, timeP, placeP, leagueN, leagueP } = gameData;



    return (
        <Card>
            <GameContainer>
                <GameTitle>Następny Mecz</GameTitle>
                <LeagueName>{leagueN}</LeagueName>
                <TeamsSection>
                    <Name>{homeN}</Name>
                    <TeamLogo src={homeLogoN} />

                    <Name>{resultN}</Name>
                    <TeamLogo src={awayLogoN} />
                    <Name>{awayN}</Name>
                </TeamsSection>
                <GameInfoSection>
                    <InfoElement><i className="fas fa-calendar-alt"></i> {dateN}</InfoElement>
                    <DividerSm />
                    <InfoElement><i className="far fa-clock"></i> {timeN}</InfoElement>
                    <DividerSm />
                    <InfoElement><i className="fas fa-map-marker-alt"></i> {placeN}</InfoElement>
                </GameInfoSection>
            </GameContainer>
            <Divider />
            <GameContainer>
                <GameTitle>Ostatni Mecz</GameTitle>
                <LeagueName>{leagueP}</LeagueName>
                <TeamsSection>
                    <Name>{homeP}</Name>
                    <TeamLogo src={homeLogoP} />
                    <Name>{resultP}</Name>
                    <TeamLogo src={awayLogoP} />
                    <Name>{awayP}</Name>
                </TeamsSection>
                <GameInfoSection>
                    <InfoElement><i className="fas fa-calendar-alt"></i> {dateP}</InfoElement>
                    <DividerSm />
                    <InfoElement><i className="far fa-clock"></i> {timeP}</InfoElement>
                    <DividerSm />
                    <InfoElement><i className="fas fa-map-marker-alt"></i> {placeP}</InfoElement>
                </GameInfoSection>
            </GameContainer>
        </Card>
    )
}

export default FeaturedGames;
