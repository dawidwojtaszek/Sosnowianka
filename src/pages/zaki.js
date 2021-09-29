import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

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

const Container = styled.div`
  padding:1rem;
  p{
    margin-top: 1rem;
    line-height: 2;
  }
  p:nth-child(even){
    padding:0.3rem .5rem 1.2rem .5rem;
    font-size: 1.4rem;
       @media (max-width: 991.98px){
      font-size: 1rem;
    }
  }
  p:nth-child(odd){
    padding:0 0.5rem ;
    font-size: 1.1rem;
    background-color: #CCC;
     @media (max-width: 991.98px){
      font-size: .8rem;
    }
  }
  ul{
    font-size: 1.3rem;
    list-style:none;
    padding: 1rem;
    text-transform: uppercase;
     @media (max-width: 991.98px){
      font-size: .8rem;
    }
  }
  li{
    padding:.3rem;
  }
`





const Zaki = () => {

  const data = useStaticQuery(graphql`
query zaki {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/juniorTeams/"}, frontmatter: {name: {eq: "Zaki"}}}
  ) {
    nodes {
      frontmatter {
        name
        section
      }
      html
    }
  }
}

      `)

  const roster = data.allMarkdownRemark.nodes.filter(element => {
    return element.frontmatter.section === 'roster'
  })
  const schedule = data.allMarkdownRemark.nodes.filter(element => {
    return element.frontmatter.section === 'schedule'
  })

  return (
    <Layout>
      <Seo title="Żaki" />
      <Card >
        <SectionTitle>Kadra:</SectionTitle>
        <Container dangerouslySetInnerHTML={{ __html: roster[0].html }} />
      </Card>
      <Card>
        <SectionTitle>Terminarz Jesień 2021/2022</SectionTitle>
        <Container dangerouslySetInnerHTML={{ __html: schedule[0].html }} />
      </Card>
    </Layout>
  )
}


export default Zaki;