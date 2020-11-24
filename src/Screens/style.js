import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Product = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: left ;
  gap:10rem;
  font-family:Arial, Helvetica, sans-serif;
  width:100%;
  @media (min-width: 60rem) {
     justify-content:center;
     flex-wrap:wrap; 
     width:100%;
     
  }
  
`;
export const AnchorLink = styled(Link)`
  text-decoration:none;
  background-color: #f0c040;
  height:100%;
  border-radius:.5rem;
  padding:1rem;
  &:hover{
      border:.1rem solid blueviolet;
  }
`;
export const ProductImages = styled.div`
  padding: 2rem;
  margin-top: 3rem;
  font-family:Arial, Helvetica, sans-serif;
`;

export const ProductDet = styled.div`
  padding: 2rem;
  margin-top: 3rem;
  font-family:Arial, Helvetica, sans-serif;
`;
export const CartDetails = styled.div`
  flex: 1 1 15rem;
  padding: 2rem;
  margin-top: 3rem;
  border: 0.1rem solid #c0c0c0;
  background-color: #f8f8f8;
  border-radius: 0.5rem;
  max-width: 29rem;
  height: 32rem;
  font-family:Arial, Helvetica, sans-serif;
`;
export const Image = styled.img`
  width: 100%;
  max-width: 29rem;
  border-radius: 0.5rem;
  height:100%;  
`;

export const Name = styled.div`
  text-align: left;
  margin-bottom: 2rem;
  font-weight: bold;
  font-size: 1.8rem;
  font-family:Arial, Helvetica, sans-serif;
`;
export const Review = styled.div`
  text-align: left;
  margin-top: 1rem;
  font-family:Arial, Helvetica, sans-serif;
`;
export const PriceDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family:Arial, Helvetica, sans-serif;
`;
export const Priceheading = styled.div`
  flex: 3 70rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
  font-family:Arial, Helvetica, sans-serif;
`;
export const PriceAmount = styled.div`
  flex: 1 20rem;
  font-family:Arial, Helvetica, sans-serif;
`;
export const Stock = styled.div`
  flex: 1 20rem;
  color: green;
  font-family:Arial, Helvetica, sans-serif;
`;
export const Unavail = styled.div`
  flex: 1 20rem;
  color: red;
`;
export const Select = styled.select`
  width: 5rem;
  height: 2.5rem;
  margin-top: 2rem;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
`;
export const Button = styled.button`
  background-color: #f0c040;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.6rem;
  border-radius: 0.5rem;
  border: 0.1rem solid #f0c040;
  &:hover{
      border:.1rem solid blueviolet;
  }
`;
