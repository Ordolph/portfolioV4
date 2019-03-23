import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';


const HeaderWrapper = styled.div`
  background: #ad1457;
  margin-bottom: 0;
  img {
    margin-bottom: 0;
    height: 100px;
    border-radius: 100px;
  }
  a {
    color: white;
    text-decoration: none;
  }
  h3 {
    margin: 0 auto;
  }
`;
const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1rem;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <Link to={'/'}>
        <h3>Austin Randolph</h3>
      </Link>
    </HeaderContainer>
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
