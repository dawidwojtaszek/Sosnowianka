/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createSchemaCustomization = ({ actions }) => {
    actions.createTypes(`
        type MarkdownRemark implements Node @infer{
            frontmatter: MarkdownRemarkFrontmatter
        }
        type MarkdownRemarkFrontmatter @infer{
            timeN: String,
            resultN: String,
            resultP: String,
        }
    `)

}