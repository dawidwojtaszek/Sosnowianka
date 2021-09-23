import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'


const NewsDetails = ({ data }) => {
    console.log(data);
    const title = data.markdownRemark.frontmatter.title
    return (
        <Layout>
            <h1>{title}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eveniet placeat nam quis voluptatum beatae eaque culpa, ex optio a!</p>
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
