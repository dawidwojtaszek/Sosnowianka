import React from 'react'
import styled from 'styled-components';


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


    return (
        <Card>
            <SectionTitle>Aktualności:</SectionTitle>
        </Card>
    )
}

export default News;