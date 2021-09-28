import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from "gatsby"
import './news-card.style.css'
const Container = styled.div`
    margin: 2rem;
    padding:1rem;
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    @media (max-width: 900px){
        grid-template-columns: 1fr;
        margin:0.5rem;
        padding:0.5rem;
        grid-gap:0.5rem;
    }
    
`;
const Thumbnail = styled.div`
    width:100%;
    @media (max-width: 900px){
        max-height: 300px;
        overflow: hidden;
    }
`
const Article = styled.article`
    width: 100%;
    padding: 1rem;
    height: 100%;
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
    
`
const ArticleTitle = styled.h2`
    text-transform: uppercase;
    font-weight: bolder;
    color:black;
    
`
const ArticleDate = styled.p`
    margin: 0.8rem 0;
    font-size: 0.85rem;
`
const ReadMoreBtn = styled.button`
    border: 2px solid #16A17C;
    border-radius:5px;
    color:#16A17C;
    font-weight: bold;
    padding:.5rem .7rem;
    background-color: white;
    cursor: pointer;
    margin-top:1rem;
    transition: 0.3s;
    float: right;
    :hover{
        color:white;
        background-color:#16A17C;
    }
`
const NewsCard = ({ title, thumbnail, date, path, abstract }) => {

    const newsThumbnail = getImage(thumbnail)
    return (

        <Container>
            <Thumbnail>
                <GatsbyImage image={newsThumbnail} alt={`${title} thumbnail`} />
            </Thumbnail>
            <Article>

                <Link to={`/news/${path}`}><ArticleTitle>{title}</ArticleTitle></Link>
                <ArticleDate>{date}</ArticleDate>
                <p>{abstract}</p>
                <Link to={`/news/${path}`}><ReadMoreBtn>Czytaj Więcej</ReadMoreBtn></Link>
            </Article>


        </Container>

    )
}

export default NewsCard;
