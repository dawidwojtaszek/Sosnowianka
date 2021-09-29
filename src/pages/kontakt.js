import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import KontaktBanner from '../images/kontakt.jpg'
import Sponsor from "../components/sponsor/sponsor"
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

const Img = styled.img`
    width:100%;
    margin-bottom: 20px;
`
const SectionTitle = styled.h3`
    text-transform: uppercase;
    color: #616161;
    font-size: 1.1rem;
      @media (max-width: 991.98px){
        font-size: 0.9rem;
    }
`
const Box = styled.div`
    display:flex;
    flex-direction: column;
    padding:1rem;
    width: 100%;
   
`
const BoxElement = styled.div`
    display: flex;
    font-size: 1.8rem;
    flex-direction: column;
      @media (max-width: 600px){
      font-size: 1.3rem;
    }
    
    i{
      margin-top: 20px;
      color:#16A17C;
      font-size: 2rem;
    }
`
const Kontakt = () => {

    return (
        <Layout>
            <Seo title="Kontakt" />

            <Img src={KontaktBanner} alt="kontakt" />


            <Card>
                <SectionTitle>Kontakt</SectionTitle>
                <Box>
                    <BoxElement>
                        <i class="fas fa-info-circle"></i>
                            <p>
                            SOSNOWIANKA
                            </p>
                            <p>Statnisław Dolny 462</p>
                            <p>Kalwaria Zebrzydowska 34-130 </p>
                            <p>NIP 551-22-96-727</p>
                                
                            
                    </BoxElement>
                    <BoxElement>
                        <i class="fas fa-phone-square-alt" ></i>
                        <p> 884 210 927</p>
                    </BoxElement>
                    <BoxElement>
                        <i class="fas fa-at"></i>
                       <p>  sosnowianka@onet.pl</p>
                    </BoxElement>
                    
                </Box>
                
            

            </Card>

        <Sponsor />
        </Layout>
    )

}

export default Kontakt;