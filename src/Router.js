import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Signup, Login, Fragments, FragmentDetail} from "./pages"
import LayoutApp from './components/LayoutApp'
import PrivateRoute from './components/PrivateRutes'

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
          <PrivateRoute exact path="/profile" component={Profile}/>
          <PrivateRoute exact path="/fragments" component={Fragments}/>
          <PrivateRoute exact path="/fragments/:fragmentId" component={FragmentDetail}/>
          <Route exact path="/notFound" component={NotFound}/>
      </Switch>
    </LayoutApp>
  </BrowserRouter>
);

export default Router;