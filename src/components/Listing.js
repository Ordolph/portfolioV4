import React from 'react';
import styled from 'styled-components';
import { Link, StaticQuery, graphql } from 'gatsby';

const LISTING_QUERY = graphql`
  query ListingQuery {
    allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
          }
        }
      }
    }
  }
`;

const Project = styled.article`
  box-shadow: 10px, 10px, 10px, rgba(25, 17, 34, 2);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  background: lightgray;
`;

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(edge => (
        <Project key={edge.node.frontmatter.path}>
          <Link to={`/projects${edge.node.frontmatter.path}`}>
            <h2>{edge.node.frontmatter.title}</h2>
          </Link>
          <p>{edge.node.frontmatter.date}</p>
          <p>{edge.node.excerpt}</p>
          <Link class="read-more" to={`/projects${edge.node.frontmatter.path}`}>
            Read More
          </Link>
        </Project>
      ))
    }
  />
);

export default Listing;
