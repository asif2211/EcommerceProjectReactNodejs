import React, { useEffect } from "react";
import {
  Product,
  ProductImages,
  ProductDet,
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
  Button,
  Stock,
  Unavail,
} from "./style";
import axios from "axios";
import Rating from "../components/Rating/Rating";
import LoadingBox from "../components/LoadingBox/LoadingBox";
import MessageBox from "../components/MessageBox/MessageBox";
import { detailsProduct } from "../actions/ProductActions";
import { useSelector, useDispatch } from "react-redux";
export default function ProductScreens(props) {
  const dispatch = useDispatch();
  const productDetails =  useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails;
  

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
  }, [dispatch,props.match.params.id]);
  console.log(productDetails);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : product ? (
        <Product>
          <AnchorLink to="/">Bak to Products</AnchorLink>
          <ProductImages>
            <Image src={product.image} alt="logo" />
          </ProductImages>
          <ProductDet>
            <Name>{product.name}</Name>
            <Review>
              <Rating rating={product.rating} review={product.numReviews} />
            </Review>
            <Review>Price: {product.price}</Review>

            <Review>Description: {product.description}</Review>
          </ProductDet>
          <CartDetails>
            <p>Seller</p>
            <Name>{product.brand}</Name>
            <div>
              <Name>
                <Rating rating={product.rating} review={product.numReviews} />
              </Name>
            </div>
            <PriceDetail>
              <Priceheading>Price:</Priceheading>
              <PriceAmount>{product.price}</PriceAmount>
            </PriceDetail>
            <PriceDetail>
              <Priceheading>Status:</Priceheading>
              {product.countInStock ? (
                <Stock> In Stock</Stock>
              ) : (
                <Unavail> Unvailable</Unavail>
              )}
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
      ) : null}
    </div>
  );
}
