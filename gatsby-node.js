exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allContentfulBlog(filter: { node_locale: { eq: "en-US" } }) {
        nodes {
          slug
        }
      }
    }
  `)

  console.log(result)
}
