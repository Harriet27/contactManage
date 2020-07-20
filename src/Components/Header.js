import React from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div>
      <Navbar expand="md" light style={{backgroundColor : '#1E2535'}}>
        <NavbarBrand tag={Link} to={'/'} style={{color: 'white'}}>
          &#8656; Back to Add Page
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Header;
