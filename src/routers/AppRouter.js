import React from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import StyledPage from '../components/StyledPage';
import AllHouse from '../components/AllHouse';
import HouseForm from '../components/HouseForm';
import NavBar from '../components/NavBar';

export const history = createBrowserHistory();


const AppRouter = () => {
    return (
      <BrowserRouter history={history}> 
        <div>

          <Switch>
            <Route path="/houses" >
              <NavBar/>
              <AllHouse />
            </Route>
            <Route path="/new">
              <NavBar/>
              <HouseForm />
            </Route>
            <Route path="/" exact={true}>
              <StyledPage />
            </Route>
          </Switch>
        </div>
        
      </BrowserRouter>
    );
  }

  export default AppRouter;