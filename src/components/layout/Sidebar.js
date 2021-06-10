import React from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Route } from "react-router-dom";

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const Sidebar = () => {
    return (
        <Route render={({ location, history }) => (
            <React.Fragment>
                <SideNav
                    onSelect={(selected) => {
                        const to = '/' + selected;
                        if (location.pathname !== to) {
                            history.push(to);
                        }
                    }}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="">

                        <NavItem eventKey="">
                            <NavIcon>
                                <i className="fa fa-fw fa-table" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Workflow
                                </NavText>
                        </NavItem>
                        <NavItem eventKey="task">
                            <NavIcon>
                                <i className="fa fa-fw fa-tasks" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Task
                                </NavText>
                        </NavItem>
                        <NavItem eventKey="signout">
                            <NavIcon>
                                <i className="fa fa-fw fa-sign-out" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Sign Out
                                </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
            </React.Fragment>
        )}
        />
    )
}

export default Sidebar