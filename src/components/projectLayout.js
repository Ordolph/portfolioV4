import React, { Component } from 'react';
import Layout from './layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export default class projectLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    const { location } = this.props;
    const { file } = this.props.data;

    return (
      <Layout location={location}>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <Img fluid={file.childImageSharp.fluid} alt="project screenshot" />
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </Layout>
    );
  }
}

export const query = graphql`
  query ProjectQuery($fPath: String!, $image: String!) {
    markdownRemark(frontmatter: { path: { eq: $fPath } }) {
      html
      frontmatter {
        title
        date
        path
        image
      }
    }
    file(relativePath: { regex: $image }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
