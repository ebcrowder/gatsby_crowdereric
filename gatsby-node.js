const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

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
      const id = node.id;
      createPage({
        path: node.frontmatter.path,
        tags: node.frontmatter.tags,
        component: blogPostTemplate,
        context: { id },
      });
    });

    filteredCV.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: cvTemplate,
        context: {},
      });
    });

    // Tag pages:
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    filteredBlogPosts.forEach(({ node }) => {
      if (node.frontmatter.tags) {
        tags = tags.concat(node.frontmatter.tags);
      }
    });

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${tag}/`;

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.tsx`),
        context: {
          tag,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
