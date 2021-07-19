import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FeaturedGames from "../components/featuredGames/featuredGames"

const IndexPage = ({ data }) => {

  console.log(data.allMarkdownRemark.nodes);
  const featuredGames = data.allMarkdownRemark.nodes[0].frontmatter;

  return (
    <Layout>
      <Seo title="Strona Główna" />

      <FeaturedGames gameData={featuredGames} />

      {/* <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p> */}
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
            gatsbyImageData(width: 50, placeholder: BLURRED, formats: AUTO, layout: FIXED)
          }
        }
        awayLogoP {
          childImageSharp {
            gatsbyImageData(width: 50, placeholder: BLURRED, formats: AUTO, layout: FIXED)
          }
        }
        homeLogoN {
          childImageSharp {
            gatsbyImageData(width: 50, placeholder: BLURRED, formats: AUTO, layout: FIXED)
          }
        }
        homeLogoP {
          childImageSharp {
            gatsbyImageData(width: 50, placeholder: BLURRED, formats: AUTO, layout: FIXED)
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
        dateP
      }
    }
  }
}
`

export default IndexPage
