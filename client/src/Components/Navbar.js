
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { NavLink} from "react-router-dom";
import { mobile } from "../Mobile";

const Container = styled.div`
 background-color: aliceblue;
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
   background-color: aliceblue;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;


const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  background-color: white;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  width: 50%;
`;

const Input = styled.input`
  border: none;
  width: 80%;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`

  flex: 1;
  text-align: center;
`;

const Brand = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


const Navbar = () => {
  return (
    <div>

<Container>
      <Wrapper>
      
        <Left>
          
        <NavLink to="/"  style={{ textDecoration: 'none'}}>
        <Brand > BOOTS. </Brand>
        </NavLink> 
      </Left>
        
        <Center>
        <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Center>
        <Right>
        <NavLink to="/register" style={{ textDecoration: 'none'}}>

       
          <MenuItem>REGISTER</MenuItem>
          </NavLink>
          <NavLink to="/login" style={{ textDecoration: 'none'}}>

        
          <MenuItem>SIGN IN</MenuItem>
          </NavLink>
          <NavLink to="/cart" style={{ textDecoration: 'none'}}>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </NavLink>
        </Right>
      </Wrapper>
    </Container>
    </div>
  )
}

export default Navbar