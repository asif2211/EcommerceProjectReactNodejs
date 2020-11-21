import React, { Component, useEffect, useState } from "react";
import {
  GridContainer,
  Header,
  Footer,
  MainContainer,
  LeftHeader,
  RightHeader,
  AnchorLinkRight,
  AnchorLeftHeader,
} from "./style";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductScreens from "../Screens/ProductScreens";
import HomeScreen from "../Screens/HomeScreen";
import Signin from "../pages/User/Signin/Signin";
import { FaThemeisle } from "react-icons/fa";
import LoadingBox from "../components/LoadingBox/LoadingBox";

export default function Main() {
  const [loading, setLoading] = useState(false);
  return (
    
    <Router>
      <GridContainer>
        <Header>
          <LeftHeader>
            <AnchorLeftHeader to="/">amazona</AnchorLeftHeader>
          </LeftHeader>
          <RightHeader>
            <AnchorLinkRight to="/Signin">Cart</AnchorLinkRight>
            <AnchorLinkRight to="/Signin">Sign in</AnchorLinkRight>
          </RightHeader>
        </Header>
        <MainContainer>
          <Route path="/product/:id" component={ProductScreens} />
          <Route path="/" exact component={HomeScreen} />
          
        </MainContainer>

        <Footer>Footer</Footer>
      </GridContainer>
    </Router>
  
   
  )
}
