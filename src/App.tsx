import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import ResearchDashboard from './views/ResearchDashboard/ResearchDashboard';
import ResearchDiary from "./views/ResearchDiary/ResearchDiary";

import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState<any>(null);

  const signIn = () => {
    setUser("not null");
  }

  const signOut = () => {
    setUser(null);
  }

  return (
    <>
      <Router>
        {user !== null &&
          <Row>
            <Col>
              <Navigation user={user} onLogout={signOut} />
            </Col>
          </Row>
        }

        <Row>
          <Col>
            <Switch>
              {user !== null &&
                <>
                  <Route path="">
                    <Redirect to="/" />
                  </Route>

                  <Route exact path="/">
                    <ResearchDashboard />
                  </Route>

                  <Route exact path="/ResearchDiary">
                    <ResearchDiary />
                  </Route>
                </>
              }

              {user === null &&
                <>
                  <Route path="">
                    <Redirect to="/Login" />
                  </Route>

                  <div className="app">
                    <header className="App-header">
                      <Route exact path="/Login">

                        <h1>Research Database</h1>

                        <p>Longview Partners</p>

                        <Form className="mt-5">
                          <Form.Group className="mb-3">
                            <Form.Control type="email" placeholder="Enter email" />
                          </Form.Group>

                          <Form.Group className="mb-3">
                            <Form.Control type="password" placeholder="Password" />
                          </Form.Group>
                        </Form>

                        <Button variant="light" onClick={signIn}>Login</Button>
                      </Route>
                    </header>
                  </div>
                </>
              }

            </Switch>
          </Col>
        </Row>
      </Router>
    </>
  );
}

export default App;
