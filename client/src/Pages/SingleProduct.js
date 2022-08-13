import React from 'react'
import Categories from '../Components/Categories'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Topbar from '../Components/Topbar'
import Products from '../Components/Products'
import { Link} from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
   margin-top: 50px;

`
const Backbutton = styled.button`
  width: 10%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

const SingleProduct = () => {
  return (
    <div> 
    <Topbar/>
    <Navbar/>
    <Container>
    <Link to="/" style={{ textDecoration: 'none'}}>
<Backbutton>Go back</Backbutton>
      </Link>
    </Container>
   
   <Products/>
<Categories/>
 <Newsletter/>
 <Footer/>


    </div>
  )
}

export default SingleProduct