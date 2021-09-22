import React from 'react'
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import NewsCard from '../news-card/news-card';

const SectionTitle = styled.h3`
    text-transform: uppercase;
    color: #616161;
    font-size: 1.1rem;
      @media (max-width: 991.98px){
        font-size: 0.9rem;
    }
`
const Card = styled.div`
    background-color: white;
    border-radius: 7px;
    padding:1.5rem;
    margin-top: 20px;
    -webkit-box-shadow: 4px 4px 6px 0px rgba(50, 50, 50, 0.16);
    -moz-box-shadow:    4px 4px 6px 0px rgba(50, 50, 50, 0.16);
    box-shadow:         4px 4px 6px 0px rgba(50, 50, 50, 0.16);
     @media (max-width: 991.98px){
        padding:1rem;
    }
    `

const News = () => {

    const data = useStaticQuery(graphql`
query news {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/_posts/"}}
    sort: {fields: frontmatter___date, order: DESC}
  ) {
    nodes {
      frontmatter {
        layout
        title
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

  `)
    const newsList = data.allMarkdownRemark.nodes;
    console.log(newsList);
    return (
        <Card>
            <SectionTitle>Aktualności:</SectionTitle>
            {newsList.map(news => (<NewsCard
                title={news.frontmatter.title}
                thumbnail={news.frontmatter.thumbnail}
                date={news.frontmatter.date}
            />))}
        </Card>
    )
}

export default News;