import React from 'react'
import styled from 'styled-components';

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

const News = ({ posts, pageContext }) => {
  console.log(' news page context');
  console.log(pageContext);
  const newsList = posts;

  return (
    <Card>
      <SectionTitle>Aktualności:</SectionTitle>
      {newsList.map(news => (<NewsCard
        title={news.frontmatter.title}
        thumbnail={news.frontmatter.thumbnail}
        date={news.frontmatter.date}
        path={news.frontmatter.path}
        key={news.id}
      />))}


      {/* {currentPage > 1 ? (<Link to={`/${currentPage - 1}`}>Poprzednia Strona</Link>) : (<div>blbaba</div>)}
      {currentPage === undefined ? (<Link to={`/2`}>Następna Strona</Link>) : (<Link to={`/${currentPage + 1}`}>Następna Strona</Link>)} */}

    </Card>
  )
}

export default News;