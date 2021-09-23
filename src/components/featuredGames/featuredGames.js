import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
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
        gap: 1rem;
        padding:1rem;
    }
    `
const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width:100%;

`
const GameTitle = styled.h3`
    text-transform: uppercase;
    color: #616161;
    font-size: 1.1rem;
      @media (max-width: 991.98px){
        font-size: 0.9rem;
    }
`
const LeagueName = styled.span`
    color:#16A17C;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
      @media (max-width: 991.98px){
        font-size: 0.9rem;
    }
`
const TeamsSection = styled.div`
    display:grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 4fr 1fr 1fr 1fr 4fr;
    max-width: 700px;
    margin:auto;
`
const Name = styled.span`
    padding:0.5rem;
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 1.2rem;
    @media (max-width: 991.98px){
        font-size: 1rem;
    }
    @media (max-width: 500px){
        font-size: 0.7rem;
    }
`
const GameInfoSection = styled.div`
    display: flex;
    justify-content:space-around;
    margin:auto;
    max-width: 600px;
`
const InfoElement = styled.div`
    text-transform: uppercase;
    margin:0 1rem;

       @media (max-width: 991.98px){
        font-size: 0.9rem;
       }
       @media (max-width: 500px){
        font-size: 0.7rem;
    }
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
const ImageContainer = styled.div`
    width:50px;
    display:flex;
    align-items: center;
    @media (max-width: 500px){
        min-width: 20px;
       width:90%;
    }
`



const FeaturedGames = () => {

    const data = useStaticQuery(graphql`
query featuredGames {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/featuredGames/"}}) {
    nodes {
      frontmatter {
        awayLogoN {
          childImageSharp {
            gatsbyImageData(width: 50, placeholder: BLURRED, formats: AUTO, layout: CONSTRAINED)
          }
        }
        awayLogoP {
          childImageSharp {
            gatsbyImageData(width: 50, placeholder: BLURRED, formats: AUTO, layout: CONSTRAINED)
          }
        }
        homeLogoN {
          childImageSharp {
            gatsbyImageData(width: 50, placeholder: BLURRED, formats: AUTO, layout: CONSTRAINED)
          }
        }
        homeLogoP {
          childImageSharp {
            gatsbyImageData(width: 50, placeholder: BLURRED, formats: AUTO, layout: CONSTRAINED)
          }
        }
        homeN
        homeP
        leagueN
        leagueP
        placeN
        placeP
        resultN
        resultP
        timeN
        timeP
        awayN
        awayP
        dateN
        dateP
      }
    }
  }
}
  `)


    const gameData = data.allMarkdownRemark.nodes[0].frontmatter

    const { homeN, resultN, awayN, timeN, dateN, placeN, homeP, resultP, awayP, dateP, timeP, placeP, leagueN, leagueP } = gameData;
    const homeLogoN = getImage(gameData.homeLogoN);
    const awayLogoN = getImage(gameData.awayLogoN);
    const homeLogoP = getImage(gameData.homeLogoP);
    const awayLogoP = getImage(gameData.awayLogoP);
    return (
        <Card>
            <GameContainer>
                <GameTitle>Następny Mecz</GameTitle>
                <LeagueName>{leagueN}</LeagueName>
                <TeamsSection>
                    <Name>{homeN}</Name>
                    <ImageContainer>
                        <GatsbyImage image={homeLogoN} alt="logo" />
                    </ImageContainer>
                    <Name>{resultN}</Name>
                    <ImageContainer>
                        <GatsbyImage image={awayLogoN} alt="logo" />
                    </ImageContainer>
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
                    <ImageContainer>
                        <GatsbyImage image={homeLogoP} alt="logo" object-fit='scale-down' />
                    </ImageContainer>
                    <Name>{resultP}</Name>
                    <ImageContainer>
                        <GatsbyImage image={awayLogoP} alt="logo" />
                    </ImageContainer>
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
