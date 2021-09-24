import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import RosterPosition from '../rosterPostion/rosterPostition';

const Card = styled.div`
    background-color: white;
    border-radius: 7px;
    padding:1.5rem;
    margin-bottom: 20px;
    -webkit-box-shadow: 4px 4px 6px 0px rgba(50, 50, 50, 0.16);
    -moz-box-shadow:    4px 4px 6px 0px rgba(50, 50, 50, 0.16);
    box-shadow:         4px 4px 6px 0px rgba(50, 50, 50, 0.16);
     @media (max-width: 991.98px){
        gap: 1rem;
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
const Coach = styled.h4`
    text-transform: uppercase;
    color:#16A17C;
    font-weight: bold;
    font-size: 1.5rem;
`
const CoachName = styled.h4`
    font-size:1.1rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-left: 1rem;
`
const CoachBox = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    
`
const RosterContainer = styled.div`
display: grid;

grid-template-columns: 1fr 1fr;
width:100%;
margin:auto;
    @media (max-width: 750px){
        width: 90%;
        display: flex;
        flex-direction: column;

    }
`
const GridBox1 = styled.div`
    grid-row: 1;
    /* @media (max-width: 750px){
        grid-row: 1;
    } */
`;
const GridBox2 = styled.div`
    grid-row: 1/3;
      /* @media (max-width: 750px){
        grid-row: 1;
    } */
`;
const GridBox3 = styled.div`
    grid-row: 2/5;
      /* @media (max-width: 750px){
        grid-row: 1;
    } */
`;
const GridBox4 = styled.div`
    grid-row:3/5;
      /* @media (max-width: 750px){
        grid-row: 1;
    } */
`;


const Roster = () => {

    const data = useStaticQuery(graphql`
query players {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/players/"}}
    sort: {fields: frontmatter___surname}
  ) {
    nodes {
      frontmatter {
        surname
        name
        position
        number
        age
      }
    }
  }
}
    `)
    const playerList = data.allMarkdownRemark.nodes;
    const goalkeeper = playerList.filter(player => {
        return player.frontmatter.position === 'bramkarz'
    })
    const defender = playerList.filter(player => {
        return player.frontmatter.position === 'obrońca'
    })
    const midfilder = playerList.filter(player => {
        return player.frontmatter.position === 'pomocnik'
    })
    const striker = playerList.filter(player => {
        return player.frontmatter.position === 'napastnik'
    })


    return (
        <Card>
            <SectionTitle>Kadra:</SectionTitle>
            <RosterContainer>
                <GridBox1>
                    <RosterPosition positionName="bramkarze" playerList={goalkeeper} />
                </GridBox1>
                <GridBox2>
                    <RosterPosition positionName="obrońcy" playerList={defender} />
                </GridBox2>
                <GridBox3>
                    <RosterPosition positionName="pomocnicy" playerList={midfilder} />
                </GridBox3>
                <GridBox4>
                    <RosterPosition positionName="napastnicy" playerList={striker} />
                </GridBox4>
                <CoachBox><Coach>Trener:</Coach><CoachName>Rafał Brańka</CoachName></CoachBox>

            </RosterContainer>
        </Card>
    )
}

export default Roster;
