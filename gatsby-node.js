/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

// exports.createSchemaCustomization = ({ actions }) => {
//     actions.createTypes(`
//         type MarkdownRemark implements Node @infer{
//             frontmatter: MarkdownRemarkFrontmatter
//         }
//         type MarkdownRemarkFrontmatter @infer{
//             timeN: String,
//             resultN: String,
//             resultP: String,
//         }
//     `)

// }
const path = require('path');
// const paginate = require('gatsby-awesome-pagination');


exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const { data } = await graphql(`
    query path {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/_posts/"}, id: {}}) {
        nodes {
        frontmatter {
            path
        }
        }
    }
    }

   `)
    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: '/news/' + node.frontmatter.path,
            component: path.resolve('./src/templates/news-details.js'),
            context: { sitePath: node.frontmatter.path }
        })
    })

    // paginate({
    //     createPage,
    //     items: data.allMarkdownRemark.nodes,
    //     itemsPerPage: 3,
    //     pathPrefix: '/',
    //     component: path.resolve('./src/pages/index.js')
    // })



    const posts = data.allMarkdownRemark.nodes;
    const postsPerPage = 3;
    const numPages = Math.ceil(posts.length / postsPerPage);
    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/` : `/${i + 1}`,
            component: path.resolve("./src/pages/index.js"),
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1,
            },
        })
    })

}