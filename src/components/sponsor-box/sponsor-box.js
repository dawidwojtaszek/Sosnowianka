import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';


const SponsorContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* border-right: 1px solid #EBEBEB; */
    display: flex;
    align-items: center;
    justify-content: center;
    margin:8px;
    max-width: 127px;
    text-align:center;

`
const SponsorLogo = styled.div`
    width: 120px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
            @media (max-width: 500px){
            width: 100px;
    }
`
const SponsorName = styled.h4`
    color:#616161;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
    margin-top: 8px;
   
    
`

const SponsorBox = ({ sponsorName, sponsorLogo }) => {

    const logo = getImage(sponsorLogo)

    return (
        <SponsorContainer>
            <SponsorLogo>
                <GatsbyImage image={logo} alt={`${sponsorName} logo`} />
            </SponsorLogo>
            <SponsorName>{sponsorName}</SponsorName>
        </SponsorContainer>
    )
}

export default SponsorBox;