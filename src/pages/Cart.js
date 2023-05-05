import React from 'react';
import styled from 'styled-components';
import Navigation from '../Components/Navigation';
import Footer from './../Footer';


const Container = styled.div`
  width: 100%;
`
const ContainerCart = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
  margin-bottom: 100px;
`
const Title = styled.h1`
  margin-top: -2000px;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  color: #333;
  text-shadow: 2px 2px 0 #ddd;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-top: 0;
  }
  `
const CartWrapper = styled.div`
  display: flex;
  justify-content: left;
  /* align-items: center; */
  flex-wrap: wrap;
  width: 100%;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 1px solid #ddd;
  padding: 10px;

  @media (max-width: 768px) {
    width: 450px;
    padding: 5px;
  }

`;

const CartItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ItemName = styled.div`
  font-weight: bold;
  font-size: 25px;
`;

const ItemPrice = styled.div`
  color: #888;
  font-size: 20px;
  margin-left: 40px;
`;

const ItemImage = styled.img`
  width: 200px;
  /* height: 150px; */
  margin-right: 10px;
`;

const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 50px;
`;


const items = [  
  { id: 1, name: 'Shirt', price: 25.99, img: 'https://image.geeko.ltd/medium/040ada51-d565-4fb0-95bb-64309bc0fad2-74412-pc-sec' },
  { id: 2, name: 'Jeans', price: 39.99, img: 'https://image.geeko.ltd/medium/de102e6f-30e2-4faa-820e-f2f895c15119-02681-pc-sec' },
  { id: 3, name: 'Shoes', price: 89.99, img: 'https://image.geeko.ltd/medium/27297c4d-5a6b-465e-9568-44e197abe0b8-71079-pc-sec' },
  { id: 4, name: 'Hat', price: 19.99, img: 'https://image.geeko.ltd/medium/e62bfcce-6561-413f-834e-fb05a3943d96-30657-pc-sec' }, 
  { id: 5, name: 'Jacket', price: 69.99, img: 'https://image.geeko.ltd/medium/5c30d763-18df-4ee6-92e2-f77ee449f651-94824-pc-sec' },  
  { id: 6, name: 'Sunglasses', price: 29.99, img: 'https://image.geeko.ltd/medium/d05f2257-e29c-44e5-a6e5-bc7da630a705-09574-pc-sec' },  
  { id: 7, name: 'Underwear', price: 99.99, img: 'https://image.geeko.ltd/medium/a22d9c9c-3bc2-4dfe-a8ff-6eb11d912082-82912-pc-sec' },  
  { id: 8, name: 'Watch', price: 129.99, img: 'https://image.geeko.ltd/medium/cd90302f-d066-4f1c-914b-d61857e6c4eb-20275-pc-sec' },  
  { id: 9, name: 'Accessories', price: 59.99, img: 'https://image.geeko.ltd/medium/f80f295b-d716-4a88-9c48-e0ba24a48d21-02969-pc-sec' },  
  { id: 10, name: 'Sweater', price: 49.99, img: 'https://image.geeko.ltd/medium/c6d56f2d-c9fe-4d82-a8d6-a3429dd9a320-83487-pc-sec' },
];

const Cart = () => {
  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <Container>
          <Navigation/>
          <ContainerCart>
        <Title>Shopping Cart</Title>
      <CartWrapper>
        {items.map(item => (
          <CartItem key={item.id}>
              <ItemImage src={item.img} alt={item.name} />
              <ItemName>{item.name}</ItemName>
            <ItemPrice>{item.price.toFixed(2)} FCFA</ItemPrice>
          </CartItem>
        ))}
        <CartTotal>
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </CartTotal>
      </CartWrapper>
    </ContainerCart>
    <Footer />
    </Container>

  );
};

export default Cart;
