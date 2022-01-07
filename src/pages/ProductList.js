import styled from "styled-components";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useLocation } from "react-router";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  text-align: center;
`;





const ProductList = () => {
  
  const location = useLocation();
  const cat = location.pathname.split("/")[2];


  return (
    <Container>
          <Announcement />
       <Header/>
    
      <Title>Accessories</Title>
    
      <Products />
    
      <Footer />
    </Container>
  );
};

export default ProductList;