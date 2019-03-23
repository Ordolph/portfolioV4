import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import styled from 'styled-components';

const PORTFOLIO_QUERY = graphql`
  query PortfolioQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

const PortfolioList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  a {
    font-size: 0.8rem;
    text-decoration: underline !important;
    color: #534763 !important;
  }
`;

const Portfolio = () => (
  <StaticQuery
    query={PORTFOLIO_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h3>Portfolio</h3>
          <PortfolioList>
            {allMarkdownRemark.edges.map(edge => (
              <li key={edge.node.frontmatter.path}>
                <Link to={`/projects${edge.node.frontmatter.path}`}>
                  {edge.node.frontmatter.title}
                </Link>
              </li>
            ))}
          </PortfolioList>
        </aside>
      </>
    )}
  />
);

export default Portfolio;
