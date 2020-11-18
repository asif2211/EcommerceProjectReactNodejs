import React, { Component } from "react";
import { GridContainer, Header, Footer,MainContainer, LeftHeader,RightHeader,AnchorLinkRight,AnchorLeftHeader} from "./style";
import {BrowserRouter as  Router, Switch,Route } from "react-router-dom";
import ProductScreens from '../Screens/ProductScreens'
import HomeScreen from '../Screens/HomeScreen'
import Signin from "../Screens/HomeScreen";
export default class Grid extends Component {
  render() {
    return (
      <Router>
      <GridContainer>
        <Header>
          <LeftHeader>
            <AnchorLeftHeader to="/">amazona</AnchorLeftHeader>
          </LeftHeader>
          <RightHeader>
            <AnchorLinkRight to="/Signin">Cart</AnchorLinkRight>
            
            <AnchorLinkRight href="">Sign in</AnchorLinkRight>
          </RightHeader>
        </Header>
        <MainContainer>
        <Route path="/product/:id"  component={ProductScreens} />
        <Route path="/" exact component={HomeScreen} />
        <Route path="/Signin" exact component={Signin} />
        
        </MainContainer>
        
        <Footer>Footer</Footer>
      </GridContainer>
      </Router>
    );
  }
}
