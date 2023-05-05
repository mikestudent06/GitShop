import React from 'react';
import styled from 'styled-components';


const Info = styled.div`
    opacity: 0;
    position: absolute;
    top: 500px;
    left : 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    transition: all .3s ease-in-out;
`

const Image = styled.img`
    filter: brightness(1);
    margin: 30px 25px; 
    width: 350px;
    height: 350px;
    border-radius : 100%;
    box-shadow: 1px 5px 12px gray , -1px 10px 10px white; 
    transition : transform, filter .3s ease-in;
`
const Container = styled.div`
  margin-top: 500px;

  &:hover ${Info}
   {
      opacity: 1;
      transform: scale(1.1);
      top: 200px;
    }
    &:hover ${Image}
   {
    filter: brightness(.8);
    }
`

const IconConntainer= styled.div `
    position: relative;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width : 100%;
    border-radius: 100%;
    padding: 10px 10px;
    margin: 0 10px;
    background-color: gray;
    color: white;
    transition : all .3s ease-out;

    &:hover {
      transform : scale(1.1);
      background-color: white;
      color: black;
    }
`

const Product = ({product}) => {
  return (
      <Container>
        <Image 
            src ={product.img}
            alt={''}
        />
        <Info>
            <IconConntainer>
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </IconConntainer>
            <IconConntainer>
              <i class="fa fa-search" aria-hidden="true"></i>
            </IconConntainer>
            <IconConntainer>
              <i class="fa fa-heart" aria-hidden="true"></i>
            </IconConntainer> 
        </Info>
      </Container>
  )
}

export default Product

