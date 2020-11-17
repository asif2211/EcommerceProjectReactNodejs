import React, { Component } from "react";
import { GridContainer, Header, Footer,MainContainer, LeftHeader,RightHeader,AnchorLinkRight,AnchorLeftHeader} from "./style";
import Products from "./Products/Products";
export default class Grid extends Component {
  render() {
    return (
      <GridContainer>
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
        <Products/>
        </MainContainer>
        
        <Footer>Footer</Footer>
      </GridContainer>
    );
  }
}
