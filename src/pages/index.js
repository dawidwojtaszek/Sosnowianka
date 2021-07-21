import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import FeaturedGames from "../components/featuredGames/featuredGames"

const IndexPage = ({ data }) => {

  const featuredGames = data.allMarkdownRemark.nodes[0].frontmatter;

  return (
    <Layout>
      <Seo title="Strona Główna" />

      <FeaturedGames gameData={featuredGames} />

    </Layout>
  )
}

export const query = graphql`
query featuredGames {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/featuredGames/"}}) {
    nodes {
      frontmatter {
        awayLogoN {
          childImageSharp {
            gatsbyImageData(width: 50, placeholder: BLURRED, formats: AUTO, layout: CONSTRAINED)
          }
        }
        awayLogoP {
          childImageSharp {
            gatsbyImageData(width: 50, placeholder: BLURRED, formats: AUTO, layout: CONSTRAINED)
          }
        }
        homeLogoN {
          childImageSharp {
            gatsbyImageData(width: 50, placeholder: BLURRED, formats: AUTO, layout: CONSTRAINED)
          }
        }
        homeLogoP {
          childImageSharp {
            gatsbyImageData(width: 50, placeholder: BLURRED, formats: AUTO, layout: CONSTRAINED)
          }
        }
        homeN
        homeP
        leagueN
        leagueP
        placeN
        placeP
        resultN
        resultP
        timeN
        timeP
        awayN
        awayP
        dateN
        dateP(formatString: "DD.MM.YYYY")
      }
    }
  }
}
`

export default IndexPage
