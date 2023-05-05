import React from 'react';
import styled from 'styled-components';
import "../data.js";
import { categories } from '../data.js';
import CategoryItem from './CategoryItem';


const Container = styled.div`

  display: flex;
  flex-wrap: wrap;
  line-height: 2.8rem;
  justify-content: center;
  height: auto;
  width: 100%;

  img {
      padding: 1rem;
  }
`
const Categories = () => {
  return (
    <Container>
        {categories.map(item=>
          <CategoryItem itemProp = {item} key={item.id} />
        )}
    </Container>
  )
}

export default Categories