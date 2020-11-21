import React, { Component } from "react";

import formatCurrency from "../../utils";
import {
  Row,
  Image,
  Card,
  ProductDetail,
  H1,
  Price,
  Anchor,
  H2,
  Span,
} from "./style";
import Rating from "../../components/Rating/Rating";

import LoadingBox from "../../components/LoadingBox/LoadingBox";
import MessageBox from "../../components/MessageBox/MessageBox";

class Products extends Component {
  constructor() {
    super();
   
  }

  render() {
    // console.log(this.props.apiData);

    return (
      <div>
         {this.props.loading ? (
          <LoadingBox></LoadingBox>
        ) : this.props.error ? (
          <MessageBox>{this.props.error}</MessageBox>
        ) : (
          <Row>
          {this.props.products.map((result) => (
            
            <Card key={result.id}>
              <a href={`/product/${result.id}`}>
                <Image src={result.image} alt="logo" />
              </a>
              <ProductDetail>
                <Anchor href={`/product/${result.id}`}>
                  <H1>
                    {result.name}
                  </H1>
                </Anchor>
                <div style={{ marginLeft: "6rem", textAlign: "center" }}>
                  <Rating rating={result.rating} review={result.numReviews} />
                </div>
                <Price className="price">
                  <H2>{result.price}</H2>
                  <Anchor href="#">
                  
                    {result.brand}
                    
                  
                </Anchor>
                </Price>
              </ProductDetail>
            </Card>

          ))
        }
        </Row>)
  }
      </div>
      
       
      
    );
          
  }
}


export default Products;
