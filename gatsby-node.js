const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve('src/templates/blog-post.tsx');
  const cvTemplate = path.resolve('src/templates/cv.tsx');

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    const filteredBlogPosts = result.data.allMarkdownRemark.edges.filter(
      ({ node }) => node.frontmatter.path.includes('/blog/')
    );
    const filteredCV = result.data.allMarkdownRemark.edges.filter(({ node }) =>
      node.frontmatter.path.includes('/cv')
    );

    if (result.errors) {
      return Promise.reject(result.errors);
    }

    filteredBlogPosts.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {},
      });
    });

    return filteredCV.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: cvTemplate,
        context: {},
      });
    });
  });
};
