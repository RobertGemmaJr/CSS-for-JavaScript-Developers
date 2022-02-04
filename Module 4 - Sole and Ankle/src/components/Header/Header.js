import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Spacer>
        <Logo />
        </Spacer>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Spacer />
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  /* padding: 0 32px; */ // From starter code
  border-bottom: 1px solid ${COLORS.gray[300]};
  display: flex;
  align-items: baseline;
  padding: 22px 32px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0 48px;
`;

// Spacer grows left and right equally
// Even with <Logo /> inside the left side
const Spacer = styled.span`
  flex: 1;
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
