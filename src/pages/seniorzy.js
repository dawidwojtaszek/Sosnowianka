import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Roster from "../components/roster/roster"
import Schedule from "../components/schedule/schedule"


const Seniorzy = () => {


    return (
        <Layout>
            <Seo title="Seniorzy" />
            <Roster />
            <Schedule />
        </Layout>
    )
}

export default Seniorzy;