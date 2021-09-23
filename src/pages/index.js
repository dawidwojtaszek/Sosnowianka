import * as React from "react"
import { graphql } from 'gatsby';

import Layout from "../components/layout"
import Seo from "../components/seo"
import FeaturedGames from "../components/featuredGames/featuredGames"
import Sponsor from "../components/sponsor/sponsor";
import News from "../components/news/news";

const IndexPage = ({ data, props, pageContext }) => {

  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  console.log('currentPage');
  console.log(currentPage);
  return (
    <Layout>
      <Seo title="Strona Główna" />
      <FeaturedGames />
      <News posts={data.allMarkdownRemark.nodes} />
      <Sponsor />
    </Layout>
  )
}

export const newsQuery = graphql`
query news($limit: Int=4, $skip: Int) {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/_posts/"}}
      sort: {fields: frontmatter___date, order: DESC}
      limit: $limit
      skip: $skip
    ) {
      nodes {
        frontmatter {
          layout
          title
          path
          thumbnail {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                aspectRatio: 1.9
                transformOptions: {cropFocus: CENTER}
              )
            }
          }
          date(formatString: "DD.MM.YYYY")
        }
        id
      }
    }
  }
    `

export default IndexPage
