import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"

const Card = styled.div`
    background-color: white;
    border-radius: 7px;
    padding:1.5rem;
    margin-bottom: 20px;
    -webkit-box-shadow: 4px 4px 6px 0px rgba(50, 50, 50, 0.16);
    -moz-box-shadow:    4px 4px 6px 0px rgba(50, 50, 50, 0.16);
    box-shadow:         4px 4px 6px 0px rgba(50, 50, 50, 0.16);
     @media (max-width: 991.98px){
        gap: 1rem;
        padding:1rem;
    }
`
const SectionTitle = styled.h3`
    text-transform: uppercase;
    color: #616161;
    font-size: 1.1rem;
      @media (max-width: 991.98px){
        font-size: 0.9rem;
    }
`

const Orliki = () => {

    return (
        <Layout>
            <Seo title="Orliki" />
            <Card >
                <SectionTitle>Kadra:</SectionTitle>
            </Card>
            <Card>
                <SectionTitle>Terminarz Jesień 2021/2022</SectionTitle>
            </Card>
        </Layout>
    )
}

export default Orliki;