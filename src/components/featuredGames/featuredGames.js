import React from 'react'

const FeaturedGames = ({ nextGame, previousGame }) => {

    return (
        <div>
            <h2>Następny mecz</h2>
            <p>{nextGame.frontmatter.home}</p>
            <p>{nextGame.frontmatter.result}</p>
            <p>{nextGame.frontmatter.away}</p>
            <h2>poprzedni mecz</h2>
            <p>{previousGame.frontmatter.home}</p>
            <p>{previousGame.frontmatter.result}</p>
            <p>{previousGame.frontmatter.away}</p>

        </div>
    )
}

export default FeaturedGames;
