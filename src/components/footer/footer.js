import React from 'react'
import styled from 'styled-components';

const FooterWrap = styled.footer`
    background-color: #262626;
    color: white;
    height: 150px;
    margin-top: 25px;
`
const FooterContainer = styled.div`
    max-width: 1366px;
    margin:auto;
    padding: 0 2rem;
`
const Footer = () => {
    return (
        <FooterWrap>
            <FooterContainer>
                © {new Date().getFullYear()} Sosnowianka
            </FooterContainer>

        </FooterWrap>
    )
}

export default Footer;