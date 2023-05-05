import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 130px 0;
  height: 60vh;
  background: linear-gradient(to bottom right, #e0e0e0, #d2d2d2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 10px #6e6e6e;
`;

const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 50px;
  color: #333;
`;

const Description = styled.div`
  font-size: 25px;
  font-weight: lighter;
  word-spacing: 5px;
  color: #666;
`;

const InputContainer = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  display: inline-block;
  width: 100%;
  padding: 0 100px;
  line-height: 50px;
  height: 50px;
  background: white;
  border: solid 1px #e6e6e6;
  border-radius: 5px;
  border-bottom-width: 3px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  outline: none;
`;

const Button = styled.button`
  width: 100px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(226, 220, 224);
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products</Description>
      <InputContainer>
        <Input type={"text"} placeholder="your email" />
        <Button>
          <i className="fa fa-paper-plane" aria-hidden="true"></i>
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
