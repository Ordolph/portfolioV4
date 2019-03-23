const path = require('path');
const createRedirect = require('gatsby-plugin-netlify');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
                image
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `/projects${node.frontmatter.path}`,
          component: path.resolve('./src/components/projectLayout.js'),
          context: {
            fPath: node.frontmatter.path,
            image: node.frontmatter.image,
          },
        });
      });
      resolve();
    });
  });
};


