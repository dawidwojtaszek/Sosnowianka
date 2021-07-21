import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Card = styled.div`
    background-color: white;
    border-radius: 7px;
    border: 1px solid #E2E2E2;
    width: 100%;
    max-width: 600px;
    margin: .7rem;
    padding:1.5rem;
    -webkit-box-shadow: 4px 4px 6px 0px rgba(50, 50, 50, 0.16);
    -moz-box-shadow:    4px 4px 6px 0px rgba(50, 50, 50, 0.16);
    box-shadow:         4px 4px 6px 0px rgba(50, 50, 50, 0.16);
   
    :hover{
        transform: scale(1.01);
    }
     @media (max-width: 991.98px){
        padding:0.8rem;
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
    text-transform: uppercase;
    font-weight:bold;
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
const ScheduleCard = () => {

    return (
        <Card>
            <InfoContainer>
                <LeagueInfo>1 Kolejka <b>B KLASA</b></LeagueInfo>
                <DividerSm />
                <div className="calendar"><Icon className="fas fa-calendar-alt"></Icon> 20.08.2021</div>
                <DividerSm />
                <div className="calendar"><Icon className="far fa-clock"></Icon> 17:00</div>
            </InfoContainer>
            <TeamsContainer>
                <Name>Sosnowianka</Name>
                <ImageContainer>
                    <div className="logo"></div>
                </ImageContainer>
                <Name>VS</Name>
                <ImageContainer>
                    <div className="logo"></div>
                </ImageContainer>

                <Name>Tempo Białka</Name>
            </TeamsContainer>


        </Card>
    );
}

export default ScheduleCard;