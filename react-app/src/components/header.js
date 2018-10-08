import React, {Component} from 'react'
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import {Hwrapper} from '../styledcomponents/styledcomponents'

class Header extends Component {
    render() {
        return (
            <Navbar bsStyle="inverse">  
                <Nav pullRight>
                    <NavItem>
                        <Hwrapper> Welcome,Pinku </Hwrapper>
                    </NavItem>
                    
                </Nav>
            </Navbar>

        )
    }
}
export default Header;