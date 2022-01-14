import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navigation from "./components/Navigation/Navigation";
import ResearchDashboard from './views/ResearchDashboard/ResearchDashboard';
import ResearchDiary from "./views/ResearchDiary/ResearchDiary";

import { companiesData } from "./views/ResearchDashboard/CompaniesTable/companiesData";
import CompanyPage from "./views/CompanyPage/CompanyPage";

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FMV } from "./types/FMV";

const fakeFMV: FMV = {
  approved: {
    raw: {
      timestamp: new Date(),
      value: 100,
      upside: 25
    },
    adjusted: {
      timestamp: new Date(),
      value: 150,
      upside: 19.5,
      tg: 3,
      dr: 8
    }
  },
  unapproved: {
    raw: {
      timestamp: new Date(),
      value: 110,
      upside: 25
    },
    adjusted: {
      timestamp: new Date(),
      value: 166,
      upside: 19.5,
      tg: 3,
      dr: 8
    }
  }
};

function App() {
  const [user, setUser] = useState<any>("not null");
  const companies: any = companiesData;

  const signIn = () => {
    setUser("not null");
  }

  const signOut = () => {
    setUser(null);
  }

  return (
    <>
      <ToastContainer />

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

                  <Route exact path="/Diary">
                    <ResearchDiary />
                  </Route>

                  <Route exact path="/Admin">
                    Admin Console
                  </Route>

                  {companies.rows.map((row: any) => {
                    return (
                      <Route path={`/${row.security.replaceAll(" ", "")}`} key={row.id}>
                        <CompanyPage
                          key={row.id}
                          companyName={row.security}
                          ticker={row.ticker}
                          primaryAnalyst={row.primaryAnalyst}
                          price={30}
                          currency="EUR"
                          fmv={fakeFMV}
                          quality={1}
                          fundamentals={2} />
                      </Route>
                    )
                  })}
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

                        <h1>Research</h1>

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
