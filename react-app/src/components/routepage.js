import React, {Component} from 'react'
import Home from './home';
import Todo from './Todo';
import UserList from './userlist';
import PostList from './postlist';
import NotFound from './notfound';


import {Row,Col} from 'react-bootstrap';
import {Dwrapper,Lwrapper} from '../styledcomponents/styledcomponents'

import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'

class RoutePage extends Component {
    render() {
        return(
            <BrowserRouter>
                <div>

                    <Row className="clearfix">
                        <Col sm={2}>
                            <Dwrapper>
                                <Lwrapper to="/">Home</Lwrapper>
                            </Dwrapper>
                            <Dwrapper>
                                <Lwrapper to="/todo"> Todo</Lwrapper>
                            </Dwrapper>
                            <Dwrapper>
                                <Lwrapper to="/userlist"> UserList</Lwrapper>
                            </Dwrapper>
                            <Dwrapper>
                                <Lwrapper to="/postlist"> PostList</Lwrapper>
                            </Dwrapper>
                        </Col>
                        <Col sm={10}>
                            <Switch>
                                <Route exact  path='/' component={Home} />
                                <Route exact  path='/todo' component={Todo} />
                                <Route exact  path='/userlist' component={UserList} />
                                <Route exact  path='/postlist' component={PostList} />
                                <Route  component={NotFound} />

                            </Switch>
                        </Col>
                    </Row>
                
                
            </div>
                

            </BrowserRouter>
        )
    }
}
export default RoutePage;