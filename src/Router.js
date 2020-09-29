import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Signup, Login, Fragments} from "./pages"
import LayoutApp from './components/LayoutApp'

const Home = () => <h1>Home</h1>
const Profile = () => <h1>Profile</h1>
const NotFound = () => <h1> Not Found</h1>




const Router = () => (
  <BrowserRouter>
    <LayoutApp>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/fragments" component={Fragments}/>
          <Route exact path="/notFound" component={NotFound}/>
      </Switch>
    </LayoutApp>
  </BrowserRouter>
);

export default Router;