import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Card = styled.div`
    background-color: white;
    border-radius: 7px;
    border: 1px solid #E2E2E2;
  
    max-width: 600px;
    margin: .6rem;
    padding:1rem;
    -webkit-box-shadow: 4px 4px 6px 0px rgba(50, 50, 50, 0.16);
    -moz-box-shadow:    4px 4px 6px 0px rgba(50, 50, 50, 0.16);
    box-shadow:         4px 4px 6px 0px rgba(50, 50, 50, 0.16);
   
    /* :hover{
        transform: scale(1.01);
    } */
     @media (max-width: 991.98px){
        padding:0.5rem;
        margin: 0.5rem auto;
    }
    `
const LeagueInfo = styled.span`
    color:#16A17C;
    text-transform: uppercase;
`
const InfoContainer = styled.div`
    display:flex;
    justify-content:space-around;

    @media (max-width: 991.98px){font-size:0.9rem}
    @media (max-width: 500px){font-size:0.7rem}
`
const Icon = styled.i`
    color:#16A17C;
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
    @media (max-width: 361px){
        font-size: 0.6rem;
    }
    
`
const TeamsContainer = styled.div`
    display:grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 4fr 1fr 1fr 1fr 4fr;
    margin: 1rem 0 ;
    text-align:center;
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
const ScheduleCard = ({ away, home, date, league, leagueSub, result, homeLogo, awayLogo, time }) => {

    const homeLogoImage = getImage(homeLogo);
    const awayLogoImgae = getImage(awayLogo);

    return (
        <Card>
            <InfoContainer>
                <LeagueInfo>{leagueSub} <b>{league}</b></LeagueInfo>
                <DividerSm />
                <div className="calendar"><Icon className="fas fa-calendar-alt"></Icon> {date}</div>
                <DividerSm />
                <div className="calendar"><Icon className="far fa-clock"></Icon> {time}</div>
            </InfoContainer>
            <TeamsContainer>
                <Name>{home}</Name>
                <ImageContainer>
                    <GatsbyImage image={homeLogoImage} alt="logo" />
                </ImageContainer>
                <Name>{result}</Name>
                <ImageContainer>
                    <GatsbyImage image={awayLogoImgae} alt="logo" />
                </ImageContainer>

                <Name>{away}</Name>
            </TeamsContainer>


        </Card>
    );
}

export default ScheduleCard;