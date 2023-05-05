import styled from "styled-components";
import Navigation from "../Components/Navigation";
import Newsletter from "../Components/Newsletter";
import Products from "../Components/Products";
import Footer from './../Footer';

const Container = styled.div`

`
const Title = styled.h1`
    margin: 30px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

`
const Filter = styled.div`
     margin: 0 30px;
`
const Select = styled.select`
`
const Option = styled.option`

`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
`
const ProdusctList = () => {
  return (
    <Container>
        <Navigation/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>
                        Color
                    </Option>
                    <Option>
                        White
                    </Option>
                    <Option>
                        Black
                    </Option>
                    <Option>
                        Red
                    </Option>
                    <Option>
                        Blue
                    </Option>
                    <Option>
                        Pink
                    </Option>
                </Select>

                <Select>
                    <Option disabled selected>
                        Size
                    </Option>
                    <Option>
                        XS
                    </Option>
                    <Option>
                        S
                    </Option>
                    <Option>
                        M
                    </Option>
                    <Option>
                        L
                    </Option>
                    <Option>
                        XL 
                    </Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected>
                        Newest
                    </Option>
                    <Option>
                        Price (asc)
                    </Option>
                    <Option>
                        Price (desc)
                    </Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProdusctList