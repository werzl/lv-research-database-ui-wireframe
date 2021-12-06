import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import ResearchDashboard from './views/ResearchDashboard/ResearchDashboard';
import ResearchDiary from "./views/ResearchDiary/ResearchDiary";

import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import { companiesData } from "./views/ResearchDashboard/CompaniesTable/companiesData";
import CompanyPage from "./views/CompanyPage/CompanyPage";

function App() {
  const [user, setUser] = useState<any>(null);
  const cd: any = companiesData;

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

        <Row className="h-100">
          <Col className="h-100">
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

                  {cd.rows.map((row: any) => {
                    return (
                      <Route path={`/${row.security.replaceAll(" ", "")}`}>
                        <CompanyPage
                          key={row.id}
                          companyName={row.security}
                          ticker={row.ticker}
                          price={8}
                          currency="EUR"
                          fmv={15}
                          dr={8}
                          tg={4.5}
                          upside={30.25} />
                      </Route>
                    )
                  })}

                  {/* TODO: Remove */}
                  {/* <Route path="/AbbeyNationalPLC">
                    <CompanyPage
                      companyName="Abbey National PLC"
                      ticker="ANL LN"
                      price={8}
                      currency="EUR"
                      fmv={15}
                      dr={8}
                      tg={4.5}
                      upside={30.25}/>
                  </Route> */}
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
