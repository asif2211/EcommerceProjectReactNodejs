import React, { Component } from "react";
import { GridContainer, Header, Footer,MainContainer, LeftHeader,RightHeader,AnchorLinkRight,AnchorLeftHeader} from "./style";
export default class Grid extends Component {
  render() {
    return (
      <GridContainer className="grid-container">
        <Header>
          <LeftHeader>
            <AnchorLeftHeader href="#">amazona</AnchorLeftHeader>
          </LeftHeader>
          <RightHeader>
            <AnchorLinkRight href="#">Cart</AnchorLinkRight>
            <AnchorLinkRight href="#">Sign in</AnchorLinkRight>
          </RightHeader>
        </Header>
        <MainContainer>
          <ul>
            <li>product 1</li>
            <li>product 1</li>
            <li>product 1</li>
            <li>product 1</li>
          </ul>
        </MainContainer>
        <Footer>Footer</Footer>
      </GridContainer>
    );
  }
}
