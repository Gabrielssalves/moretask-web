import React from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const Sidebar = (props) => {
    const isAdmin = localStorage.getItem('userAdmin');

    const { location } = props;
    if (location.pathname.match(/login/) || location.pathname.match(/register/)) {
        return null;
    }

    return (
        <Route render={({ location, history }) => (
            <React.Fragment>
                <strong>
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
                            {isAdmin === "true" &&
                                <NavItem eventKey="workflow">
                                    <NavIcon>
                                        <i
                                            className="fa fa-fw fa-table"
                                            style={{ fontSize: '1.75em' }}
                                        />
                                    </NavIcon>
                                    <NavText>
                                        <span className="h5">
                                            Workflow
                                        </span>
                                    </NavText>
                                </NavItem>}
                            <NavItem eventKey="task">
                                <NavIcon>
                                    <i
                                        className="fa fa-fw fa-tasks"
                                        style={{ fontSize: '1.75em' }}
                                    />
                                </NavIcon>
                                <NavText>
                                    <span className="h5">
                                        Tarefa
                                    </span>
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="faq">
                                <NavIcon>
                                    <i
                                        className="fa fa-fw fa-question-circle"
                                        style={{ fontSize: '1.75em' }}
                                    />
                                </NavIcon>
                                <NavText>
                                    <span className="h5">
                                        FAQ
                                    </span>
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="signout">
                                <NavIcon>
                                    <i className="fa fa-fw fa-sign-out" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    <span className="h5">
                                        Desconectar
                                    </span>
                                </NavText>
                            </NavItem>
                        </SideNav.Nav>
                    </SideNav>
                </strong>

            </React.Fragment>
        )}
        />
    )
}

export default withRouter(Sidebar)