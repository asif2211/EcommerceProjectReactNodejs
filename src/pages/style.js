import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";


export const GridContainer = styled.div`
  display: grid;
  grid-template-areas: "header" "mainContainer" "footer";
  grid-template-rows:  3em 1fr 4rem;
  grid-template-columns: 1fr;
  height:100%;
`;


export const Header  = styled.div`
  grid-area: header;
  background-color: #203040;
  color: #fff;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  align-items:center;
  
  
`;
export const MainContainer  = styled.div`
  grid-area: mainContainer;
  padding:1rem;

`;

export const LeftHeader = styled.div`
margin-left:1rem;

`;
export const RightHeader = styled.div`
color:red;
`;
export const Footer = styled.div`
  grid-area: footer;
  background-color: #203040;
  color:white;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;
export const AnchorLeftHeader = styled(Link)`
  color:white;
  text-decoration:none;
  padding:1rem;
  font-size:3rem;
  font-weight:bold;
  cursor: pointer;
  &:hover{
    color:#ff8000;
  }
`;
 export const AnchorLinkRight = styled(Link)`
 color:white;
 text-decoration:none;
 padding:1rem;
 
 &:hover{
   color:#ff8000;
 }
`;

