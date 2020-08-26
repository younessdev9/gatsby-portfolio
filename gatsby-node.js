// const path = require("path")
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//     {
//       blog: allContentfulBlog(filter: { node_locale: { eq: "en-US" } }) {
//         nodes {
//           slug
//         }
//       }
//     }
//   `)
//   result.data.blog.nodes.forEach(element => {
//     createPage({
//       path: `/blog/${element.slug}`,
//       component: path.resolve(`src/templates/blog.js`),
//       context: {
//         slug: element.slug,
//       },
//     })
//   })
// }
