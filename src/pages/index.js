import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FeaturedGames from "../components/featuredGames/featuredGames"

const IndexPage = ({ data }) => {

  const featuredGames = data.markdownRemark.frontmatter;
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
  markdownRemark(fileAbsolutePath: {regex: "/featuredGames/"}) {
    frontmatter {
      awayLogoN
      awayLogoP
      awayN
      awayP
      dateN
      dateP
      homeLogoN
      homeLogoP
      homeP
      homeN
      leagueN
      leagueP
      placeN
      placeP
      resultN
      resultP
      timeP
      timeN
    }
  }
}
`

export default IndexPage
