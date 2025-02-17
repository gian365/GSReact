import React, { Component } from 'react';
import { Navbar, NavbarToggler, Nav, NavItem, Collapse } from 'reactstrap';
import { NavLink, Outlet } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navCheck: false
        };

        this.navCollapser = this.navCollapser.bind(this);
    }

    navCollapser() { 
        this.setState({
            navCheck: !this.state.navCheck
        });
    }

    //Renders a Navbar that collapses under certain viewports
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Navbar sticky="top" expand="md">
                                <NavbarToggler onClick={this.navCollapser} />

                                <Collapse isOpen={this.state.navCheck} navbar>
                                    <Nav navbar>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/news" activeClassName="active">
                                                <b>NEWS</b>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/units" activeClassName="active">
                                                <b>UNITS</b>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/equips" activeClassName="active">
                                                <b>EQUIPMENT</b>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                            </Navbar>
                            <Outlet />
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
    
}

export default Header;