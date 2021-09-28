import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';
import NewsCard from '../news-card/news-card';
import './news.style.css';
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
const Pagination = styled.div`
  display:flex;
  justify-content: center;
  width: 100%;
`
const PaginationElement = styled.div`
  color:black;
  text-transform: uppercase;
  padding: 1rem;
  font-weight: bolder;
`


const News = ({ posts, isLast, isFirst, currentPage }) => {



  const prevPath = currentPage - 1 === 1 ? '/' : `/${currentPage - 1}`;
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
        abstract={news.frontmatter.abstract}
      />))}

      <Pagination>
        <PaginationElement>
          <Link to={prevPath} className={isFirst ? 'hidden' : 'show'}><i className="fas fa-chevron-left"></i> Wstecz</Link>
        </PaginationElement>
        <PaginationElement>
          <span>{currentPage}</span>
        </PaginationElement>
        <PaginationElement>
          <Link to={`/${currentPage + 1}`} className={isLast ? 'hidden' : 'show'} >Następne <i className="fas fa-chevron-right"></i></Link>
        </PaginationElement>

      </Pagination>


    </Card>
  )
}

export default News;