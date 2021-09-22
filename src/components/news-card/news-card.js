import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Container = styled.div`
    margin: 2rem;
    padding:1rem;
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: 1fr 1fr;
    
`;
const Thumbnail = styled.div`
    width:100%;
`
const Article = styled.article`
    width: 100%;
    padding: 1rem;
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
    
`
const ArticleTitle = styled.h2`
    text-transform: uppercase;
    font-weight: bolder;
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
    float: right;
    :hover{
        color:white;
        background-color:#16A17C;
    }
`
const NewsCard = ({ title, thumbnail, date }) => {

    const newsThumbnail = getImage(thumbnail)
    return (
        <Container>
            <Thumbnail>
                <GatsbyImage image={newsThumbnail} alt={`${title} thumbnail`} />
            </Thumbnail>
            <Article>

                <ArticleTitle>{title}</ArticleTitle>
                <ArticleDate>{date}</ArticleDate>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci enim eveniet tenetur recusandae quo doloribus totam rem neque reiciendis atque.</p>
                <ReadMoreBtn>Czytaj Więcej</ReadMoreBtn>
            </Article>


        </Container>
    )
}

export default NewsCard;
