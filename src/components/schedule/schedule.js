import React from 'react'
import styled from 'styled-components';
import ScheduleCard from '../schedule-card/schedule-card';
import { graphql, useStaticQuery } from 'gatsby';

const Card = styled.div`
    background-color: white;
    border-radius: 7px;
    padding:1.5rem;
    -webkit-box-shadow: 4px 4px 6px 0px rgba(50, 50, 50, 0.16);
    -moz-box-shadow:    4px 4px 6px 0px rgba(50, 50, 50, 0.16);
    box-shadow:         4px 4px 6px 0px rgba(50, 50, 50, 0.16);
     @media (max-width: 991.98px){
        gap: 1rem;
        padding:1rem;
    }
    `
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    @media (max-width: 991.98px){
        flex-direction: column;
        align-items: center;
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

const Schedule = () => {
    const data = useStaticQuery(graphql`
query schedule {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/schedule/"}}
    sort: {fields: frontmatter___date}
  ) {
    nodes {
      frontmatter {
        title
        date
        league
        result
        away
        home
        homeLogo {
          childImageSharp {
            gatsbyImageData(formats: AUTO, layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
      id
    }
  }
}

`)
    const schedule = data.allMarkdownRemark.nodes;
    console.log(schedule);
    return (
        <Card>
            <SectionTitle>Terminarz jesień 2021/2022</SectionTitle>
            <Container>
                <ScheduleCard />
                <ScheduleCard />
                <ScheduleCard />
                <ScheduleCard />
                <ScheduleCard />
                <ScheduleCard />
            </Container>
        </Card>
    );
}


export default Schedule;