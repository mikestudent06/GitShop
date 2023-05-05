import React from 'react';
import styled from 'styled-components';


const Image = styled.img`
    width: 380px;
    height: 350px;
`
const Info = styled.div`
    text-align : center;    
`
const Title = styled.h1`
    text-align : center;
`   
const Button = styled.button`
    text-align : center;
    padding: 3px 6px;
    font-size: 1.2rem;
    box-sizing: border-box;
    background: #e7eef1;
    border: solid 5px transparent;
    border-image: linear-gradient(to top right, #FF3333,gray);
    border-image-slice: 2;
    color: rgba(252, 22, 98, 0.726);
    transition: all 0.3s ease-in-out;

&:hover {
    background-image: linear-gradient(to top right, #FF3333, white);
    color: white;
}
`

const CategoryItem = ({itemProp}) => {
  return (
    <div>
        {<Image src = {itemProp.img}
        alt={''}
        /> }
        <Info>
            <Title>{itemProp.title}</Title>
            <Button>Shop Now</Button>
        </Info>
    </div>
  )
}

export default CategoryItem