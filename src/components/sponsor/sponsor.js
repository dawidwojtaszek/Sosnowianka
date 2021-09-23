import React from 'react'
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"
import SponsorBox from '../sponsor-box/sponsor-box';

const Card = styled.div`
    background-color: white;
    border-radius: 7px;
    padding:1.5rem;
    margin-top: 20px;
    -webkit-box-shadow: 4px 4px 6px 0px rgba(50, 50, 50, 0.16);
    -moz-box-shadow:    4px 4px 6px 0px rgba(50, 50, 50, 0.16);
    box-shadow:         4px 4px 6px 0px rgba(50, 50, 50, 0.16);
     @media (max-width: 991.98px){
        padding:1rem;
    }
    `
const SectionTitle = styled.h3`
    text-transform: uppercase;
    color: #616161;
    font-size: 1.1rem;
      @media (max-width: 991.98px){
        font-size: 0.9rem;
    }
`
const SponsorFeatured = styled.div`
    display: flex;
    align-items: center;
    width: 300px;
    justify-content: space-between;
    margin-top: 25px ;

           @media (max-width: 500px){
            margin-top: 20px;
            width: 250px;
    }
`
const SponsorFeaturedImage = styled.div`
    width:84px;
    height: 97px;
    @media (max-width: 500px){
        width: 70px;
        height: 82px;
    }
`
const SponsorFeaturedName = styled.h3`
    color:#616161;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 18px;
    width: 160px;
        @media (max-width: 500px){
        font-size: 15px;
        width: 130px;
    }
`
const SponsorListContainer = styled.div`
    display: flex;
    margin-top: 25px;
    flex-wrap: wrap;
    @media (max-width: 500px){
        justify-content: space-around;
    }
`
const Divider = styled.div`
    border-left:1px solid #EBEBEB;
    height: 80px;
    width: 0;
`
const Sponsor = () => {

    const data = useStaticQuery(graphql`
query sponsor {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/sponsor/"}}) {
    nodes {
      frontmatter {
        sponsorName
        sponsorLogo {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 100)
          }
        }
      }
      id
    }
  }
}
    `)
    const sponsorList = data.allMarkdownRemark.nodes;

    return (
        <Card>
            <SectionTitle>Wspierają nas:</SectionTitle>
            <SponsorFeatured>
                <SponsorFeaturedImage>
                    <StaticImage
                        src="../../images/sponsor/gmina.png"
                        alt="Gmina Kalwaria"
                        placeholder="blurred"
                        layout="constrained"

                    />
                </SponsorFeaturedImage>
                <Divider />
                <SponsorFeaturedName>Gmina Kalwaria Zebrzydowska</SponsorFeaturedName>
            </SponsorFeatured>
            <SponsorListContainer>
                {
                    sponsorList.map(sponsor => (
                        <SponsorBox
                            key={sponsor.id}
                            sponsorLogo={sponsor.frontmatter.sponsorLogo}
                            sponsorName={sponsor.frontmatter.sponsorName}
                        />

                    ))
                }
            </SponsorListContainer>
        </Card>
    )
}

export default Sponsor