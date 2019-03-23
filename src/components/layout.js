import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Spring } from 'react-spring/renderprops';
import Img from 'gatsby-image';
import Header from './header';
import Portfolio from './Portfolio';
import './layout.css';

const MainLayout = styled.main`
  max-width: 90%;
  margin: 1rem;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;
  a {
    color: #000;
    text-decoration: none;
  }
  h2 {
    margin-bottom: 0;
  }
  p {
    font-size: 0.8rem;
  }
  .read-more {
    font-size: 0.8rem;
    text-decoration: underline;
    color: #534763;
  }
`;

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        file(relativePath: { regex: "/bg/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Spring
          from={{ height: location.pathname === '/' ? 100 : 300 }}
          to={{ height: location.pathname === '/' ? 300 : 100 }}
        >
          {styles => (
            <div style={{ overflow: 'hidden', ...styles }}>
              <Img fluid={data.file.childImageSharp.fluid} />
            </div>
          )}
        </Spring>
        {/* {location.pathname === '/' && (
          
        )} */}
        <MainLayout>
          <div>{children}</div>
          <Portfolio />
        </MainLayout>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
