import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Seo from "../components/seo"
import styled from 'styled-components'

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
const NewsDetails = ({ data }) => {
  console.log(data);
  const title = data.markdownRemark.frontmatter.title
  return (
    <Layout>

      <Seo title={title} />
      <Card>
        <h1>{title}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eveniet placeat nam quis voluptatum beatae eaque culpa, ex optio a!</p>
      </Card>
    </Layout>
  )
}

export const query = graphql`
query newsDetails($sitePath: String) {
  markdownRemark(frontmatter: {path: {eq: $sitePath}}) {
    html
    frontmatter {
      path
      title
    }
  }
}
 `

export default NewsDetails;
