import React, { Component,useState,useEffect } from "react";
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
import axios from "axios";
import Rating from "../components/Rating/Rating";
import LoadingBox from "../components/LoadingBox/LoadingBox";
import MessageBox from "../components/MessageBox/MessageBox";

export default function ProductScreens(props) {

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);

useEffect(() => {
  const fetch = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/api/products");
      setLoading(false);
      setProducts(data);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  fetch();
}, []);
console.log(products)
  const productdata = products.find((x) => x.id == props.match.params.id);
  
    return (
      <div>
         {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox>{error}</MessageBox>
        ) : productdata ? (
      <Product>
        <AnchorLink to="/">Bak to Products</AnchorLink>
        <ProductImages>
          <Image src={productdata.image} alt="logo" />
        </ProductImages>
        <ProductDetails>
          <Name>{productdata.name}</Name>
          <Review>
            <Rating
            
              rating={productdata.rating}
              review={productdata.numReviews}
            />
          </Review>
          <Review>Price: {productdata.price}</Review>

          <Review>Description: {productdata.description}</Review>
        </ProductDetails>
        <CartDetails>
          <p>Seller</p>
          <Name>{productdata.brand}</Name>
          <div>
            <Name>
              <Rating
                rating={productdata.rating}
                review={productdata.numReviews}
              />
            </Name>
          </div>
          <PriceDetail>
            <Priceheading>Price:</Priceheading>
            <PriceAmount>{productdata.price}</PriceAmount>
          </PriceDetail>
          <PriceDetail>
            <Priceheading>Status:</Priceheading>
  {productdata.countInStock ?
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
      
    ):null
  }
    </div>)
  



  
}

  
    