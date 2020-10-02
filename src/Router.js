import React from 'react';
import {Typography} from "antd"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Signup, Login, Fragments, FragmentDetail} from "./pages"
import LayoutApp from './components/LayoutApp'
import PrivateRoute from './components/PrivateRutes'
const {Title} = Typography

const Home = () => 
  <div style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"5%"}}>
    <img src="./g26.png" alt="logoFragments" style={{height:"200px", margin:"16px 5px 14px 20px"}}/>
    <Title level={2}>The place to summarize what really matters</Title>
    <Title level={3}>Please Login or Signup</Title>
  </div>
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