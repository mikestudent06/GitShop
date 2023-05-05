import styled from "styled-components"
import Navigation from "../Components/Navigation"
import Newsletter from "../Components/Newsletter"
import Footer from "../Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';


const Container = styled.div`
`

const Wrapper = styled.div`
    position: relative;
    top: 130px;
    display: flex;
    gap: 130px;
    justify-content: center;
    align-items: center;
    align-content: center;
`
const ImgContainer = styled.div`

`
const Image = styled.img`
    width: 450px;
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`
const Title = styled.h1`
    font-size: 35px;
`
const Description = styled.p`

`
const Price = styled.div`
  font-size: 26px;
  font-family: 'roboto';
`
const FilterContainer = styled.div`
    margin-top: 10px;
    width: 50%;
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px;
`
const FilterTitle = styled.span`
    font-size: 23px;
    font-weight: 200;
    margin-right: 5px;
`
const FilterColor = styled.div` 
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: ${props => props.color};
    margin: 0 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    border: 2px solid black;
`
const FilterSizeOption = styled.option`

`

const Product = () => {
  return (
    <Container>
        <Navigation/>
        <Wrapper>
            <ImgContainer>
                <Image src={"https://image.geeko.ltd/original/017262fd-d34c-4130-81ef-481cd280785e-16581-pc"} alt={"product"}/>
            </ImgContainer>
            <InfoContainer>
                <Title>Women Dresses</Title>
                <Description>
                    Non fugiat amet ea elit sit nostrud irure.
                </Description>
                <Price>20000 fcfa</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle disabled selected>
                            Color
                        </FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="red"/>
                        <FilterColor color="gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>X</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product