import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";


export const Row = styled.div`
  display:flex;
  flex-wrap:wrap;
  flex-direction:row;
  align-items:center;
  justify-content:center;
`;
export const Image = styled.img`
  width:100%;
  max-width:29rem;
  border-radius:.5rem;
  
  
`;
export const Card = styled.div`
  
  margin:1rem;
  border:.1rem solid #c0c0c0;
  background-color:#f8f8f8;
  border-radius:.5rem;
  max-width:29rem;
`;
export const ProductDetail = styled.div`
    padding:1rem;
`;
export const H1 = styled.h1`
    font-size:1.8rem;
    padding:1rem 0;
    text-align:center;
`;
export const H2 = styled.h2`
    font-size:1.6rem;
    padding:1rem 0;
`;

export const Price  = styled.div`
    display:flex;
    justify-content:space-between;
    width:26rem;
    align-items:center;

`;
export const Rating  = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    
`;
export const Anchor  = styled.a`
   text-decoration:none;
`;
export const Span  = styled.span`
   color:orange;
   padding:.1rem;
`;


