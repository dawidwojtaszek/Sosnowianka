import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from '@reach/router';
import './mobileMenu.style.css';

const Menu = styled.nav`
    width:300px;
    border-radius: 6px;
    position: absolute;
    top:75px;
    right: 5px;
    height: 400px;
    background-color: #145342;
    display: none;
    z-index: 1;
    padding:1rem;
    color:white;
    -webkit-box-shadow: 4px 4px 6px 0px rgba(50, 50, 50, 0.16);
    -moz-box-shadow:    4px 4px 6px 0px rgba(50, 50, 50, 0.16);
    box-shadow:         4px 4px 6px 0px rgba(50, 50, 50, 0.16);
    @media (max-width: 991.98px){
        display: ${({ showNav }) => showNav ? 'block' : 'none'};
    }
    
`
const Hamburger = styled.button`
    float:right;
    color:white;
    padding:.5rem;
    font-size:2rem;
    background: none;
    border:none;
    cursor: pointer;
     display: none;
    @media (max-width: 991.98px){
        display: block;
    }
`

const MobileMenu = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div>
            <Hamburger onClick={() => setToggle(!toggle)}>{toggle ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}</Hamburger>
            <Menu showNav={toggle}>
                <ul className="links-group">
                    <li className="menu-element"><Link to='/'>Strona Główna</Link></li>
                    <li className="menu-element inactive-element">Drużyny:
                        <ul>
                            <li className="menu-element teams"><Link to='/'>Seniorzy</Link></li>
                            <li className="menu-element teams"><Link to='/'>Żaki</Link></li>
                        </ul>
                    </li >
                    <li className="menu-element"><Link to='/'>Kontakt</Link></li>
                </ul>
            </Menu>
        </div >

    )
}
export default MobileMenu;
