import styled from "styled-components";

export const CategoryComponentStyles = styled.div`
  .category-product-title {
    font-size: 38px;
    text-align: center;
    margin-top: 0;
  }
  
   .category-product-container {
     display: grid;
     grid-template-columns: repeat(4, 1fr);
     column-gap: 20px;
     row-gap: 50px;
   }
`
