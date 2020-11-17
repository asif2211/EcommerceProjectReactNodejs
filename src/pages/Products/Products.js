import React, { Component } from "react";
import logo from "../../images/p1.jpg";
import {
  Row,
  Image,
  Card,
  ProductDetail,
  H1,
  Price,
  Rating,
  Anchor,
  H2,
  Span,
} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "../../action";
import { REQUEST_API_DATA } from "../../action";
import data from '../Products/Products.json';
class Products extends Component {
  constructor() {
    super();
    this.state  = {
        products : data.product,
    }
  }

  componentDidMount() {
    this.props.requestApiData();
  }
  render() {

    console.log(this.state.products);
   
    return  (
      <Row>
          {this.state.products.map(result => (
             
              <Card key={result.id}>
              <a href="product.html">
                <Image src={result.images[0].imageUrl} alt="logo" />
              </a>
              <ProductDetail>
                <Anchor href="#">
                  <H1>
                    {result.name}
                  </H1>
                </Anchor>
                <Rating className="rating">
                  <Span>
                    <FontAwesomeIcon icon={faStar} />
                  </Span>
                  <Span>
                    <FontAwesomeIcon icon={faStar} />
                  </Span>
                  <Span>
                    <FontAwesomeIcon icon={faStar} />
                  </Span>
                  <Span>
                    <FontAwesomeIcon icon={faStar} />
                  </Span>
                  <Span>
                    <FontAwesomeIcon icon={faStarHalfAlt} />
                  </Span>
                </Rating>
                <Price className="price">
                  <H2>{result.price}</H2>
                  <H2>{result.brand}</H2>
                </Price>
              </ProductDetail>
            </Card>
          ))}
        

      </Row>
    );
  }
}

const mapStateToProps = (state) => ({ apiData: state.data });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestApiData }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Products);
