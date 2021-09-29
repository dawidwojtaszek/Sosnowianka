import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Seo from "../components/seo"
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Sponsor from '../components/sponsor/sponsor'

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
const Article = styled.article`
  padding: 1.8rem;
`


const ArticleTitle = styled.h1`
  text-transform: uppercase;
  font-weight: bolder;
  font-size: 2.5rem;
  padding: 2rem 0 1rem 0;
   @media (max-width: 991.98px){
        font-size: 2rem;
        padding: 1rem 0 1rem 0;
    }
    @media (max-width: 500px){
      font-size: 1.5rem;
    }

`
const ArticleDate = styled.p`
  margin-bottom: 1rem;
  font-style: italic;
`
const ArticleBody = styled.div`
  padding: 1rem 0;
  font-size: 1.4rem;
   @media (max-width: 991.98px){
        padding: .8rem 0;
        font-size: 1rem;
    }
  ul{
    list-style: none;
    padding: 1rem 0;
    text-transform: uppercase;
  }
  li{
    padding: .4rem 0;
    @media (max-width: 991.98px){
      padding: .3rem 0;
    }
  }
`
const ImageBox = styled.div`
  text-align:center;
  width: 100%;
`
const NewsDetails = ({ data }) => {

  const title = data.markdownRemark.frontmatter.title
  const thumbnail = getImage(data.markdownRemark.frontmatter.thumbnail);
  return (
    <Layout>

      <Seo title={title} />

      <Card>

        <ImageBox>
          <GatsbyImage image={thumbnail} alt="thumbnail" />
        </ImageBox>
        <Article>
          <ArticleTitle>{title}</ArticleTitle>
          <ArticleDate>{data.markdownRemark.frontmatter.date}</ArticleDate>
          <ArticleBody dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </Article>




      </Card>
      <Sponsor/>
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
      thumbnail {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            transformOptions: {cropFocus: CENTER}
            aspectRatio: 1.9
            layout: FULL_WIDTH
          )
        }
      }
      date(formatString: "DD.MM.YYYY")
    }
  }
}
 `

export default NewsDetails;
