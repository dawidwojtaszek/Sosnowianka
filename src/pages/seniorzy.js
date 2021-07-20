import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Schedule from "../components/schedule/schedule"

const Seniorzy = () => {


    return (
        <Layout>
            <Seo title="Seniorzy" />
            <Schedule />
        </Layout>
    )
}

export default Seniorzy;