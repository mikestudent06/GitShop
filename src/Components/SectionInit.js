import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
        margin : 70px 0;
        padding : 5px 0;
        font-size: 50px;
        text-align: center;
` 

const SectionInit = ({title}) => {
  return (
    <Title>{title}</Title>
  )
}

export default SectionInit