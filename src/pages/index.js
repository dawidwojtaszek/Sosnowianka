import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = ({ data }) => {

  const featuredGames = data.allMarkdownRemark.nodes
  console.log(featuredGames[1]);
  return (
    <Layout>
      <Seo title="Strona Główna" />
      <h1>Hi people</h1>
      <p></p>
      <p></p>
      {/* <FeaturedGames previousGame={featuredGames[1]} nextGame={featuredGames[0]} /> */}
      <StaticImage
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
      </p>
    </Layout>
  )
}

// export const query = graphql`
// query featuredGames {
//    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/featuredGames/"}}) {
//     nodes {
//       frontmatter {
//         away
//         aweyLogo
//         date
//         home
//         homeLogo
//         place
//         result
//         time
//       }
//     }
//   }
// }

// `

export default IndexPage
