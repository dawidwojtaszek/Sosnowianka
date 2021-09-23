import React from 'react'
import { Link } from 'gatsby'


const Pager = (pageContext) => {

    const { previousPagePath, nextPagePath } = pageContext;
    return (
        <div>

            <span>{previousPagePath}</span>
            <span>{nextPagePath}</span>
        </div>
    )
}
export default Pager;
