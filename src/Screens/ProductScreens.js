import React, { Component } from "react";
import {
  Product,
  ProductImages,
  ProductDetails,
  CartDetails,
  Review,
  Image,
  AnchorLink,
  Name,
  PriceDetail,
  PriceAmount,
  Priceheading,
  Select,
  ButtonContainer,
  Button,Stock,
  Unavail
} from "./style";
import data from "../pages/Products/Products.json";
import Rating from "../components/Rating/Rating";
export default class ProductScreens extends Component {
  product = data.product.find((x) => x.id === this.props.match.params.id);

  render() {
    if (this.product) {
      return (
        <Product>
          <AnchorLink to="/">Bak to Products</AnchorLink>
          <ProductImages>
            <Image src={this.product.images[0].imageUrl} alt="logo" />
          </ProductImages>
          <ProductDetails>
            <Name>{this.product.name}</Name>
            <Review>
              <Rating
                rating={this.product.rating}
                review={this.product.numReviews}
              />
            </Review>
            <Review>Price: {this.product.price}</Review>

            <Review>Description: {this.product.description}</Review>
          </ProductDetails>
          <CartDetails>
            <p>Seller</p>
            <Name>{this.product.brand}</Name>
            <div>
              <Name>
                <Rating
                  rating={this.product.rating}
                  review={this.product.numReviews}
                />
              </Name>
            </div>
            <PriceDetail>
              <Priceheading>Price:</Priceheading>
              <PriceAmount>{this.product.price}</PriceAmount>
            </PriceDetail>
            <PriceDetail>
              <Priceheading>Status:</Priceheading>
    {this.product.countInStock ?
      (<Stock> In Stock</Stock>):(<Unavail> Unvailable</Unavail>)}
            </PriceDetail>
            <PriceDetail>
              <Priceheading>QTY:</Priceheading>
              <PriceAmount>
                <Select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                </Select>
              </PriceAmount>
            </PriceDetail>
            <ButtonContainer>
                <Button>Add to cart</Button>
            </ButtonContainer>
          </CartDetails>
        </Product>
      );
    }
    {
      return (
        <div>
          <p>Product is not found</p>
        </div>
      );
    }
  }
}
