import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    padding:1rem;
    
`
const PosistionTitle = styled.h4`
    text-transform: uppercase;
    color:#16A17C;
    font-weight: bold;
    font-size: 1.5rem;
    margin:1rem 0;
`
const Table = styled.table`
    width: 100%;
`
const Thead = styled.thead`
    text-transform: uppercase;
    font-size: 0.9rem;
    
`
const Tbody = styled.tbody`
    font-size:1.1rem;
    font-weight: bold;
    text-transform: uppercase;
   
`


const RosterPosition = ({ positionName, playerList }) => {

    return (
        <Container>
            <PosistionTitle>{positionName}</PosistionTitle>
            <Table>
                <Thead>
                    <tr>
                        <td>Imię i nazwisko</td>
                        {/* <td>wiek</td> */}
                        <td>NR</td>
                    </tr>
                </Thead>
                <Tbody>
                    {playerList.map(player => (
                        <tr key={player.id}>
                            <td>{player.frontmatter.name} {player.frontmatter.surname}</td>
                            {/* <td>{player.frontmatter.age}</td> */}
                            <td>{player.frontmatter.number}</td>
                        </tr>
                    ))}
                </Tbody>
            </Table>
        </Container>
    )
}

export default RosterPosition;