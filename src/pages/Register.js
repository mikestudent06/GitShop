import styled from "styled-components";
import Navigation from "../Components/Navigation";

const Container = styled.div`
  background: url("https://th.bing.com/th/id/R.f7f539df1f3f4d0fd9a7aa0e7cbb65d8?rik=nN3s9NQOY2uOYQ&pid=ImgRaw&r=0") no-repeat;
  background-size: cover;
  background-position: 40% 35%;
  box-shadow: 5px 5px 10px #6e6e6e;
  transition: all 0.3s ease;
`;

const RegisterWrapper = styled.div`
  position: relative;
  padding: 180px;
  color: #999;
  font-size: 1rem;
  display: grid;
  place-items: center;
`;

const RegisterBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 50px;
  background: white;
  box-shadow: 0 0 50px rgb(0 0 0 / 20%);
  border-radius: 10px;
  transition: all 0.3s ease;
  &:hover {
    border: 2px solid pink;
  }
`;

const Form = styled.form`
  margin-top: 25px;
  margin-right: 30px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 10px 50px;
  place-items: center;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 0 20px;
  height: 50px;
  background: white;
  border: solid 1px #e6e6e6;
  border-radius: 5px;
  border-bottom-width: 3px;
  transition: all 0.3s ease;
  outline: none;
  border-color: #ccc;
  &:focus {
    border-color: #f2395a;
  }
`;

const Title = styled.h3`
  font-size: 1.6rem;
  padding-bottom: 20px;
  margin: 0 0 20px;
  border-bottom: dashed 1px #e6e6e6;
`;

const Desc = styled.p`
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 10px;
`;

const Submit = styled.input`
  position: relative;
  z-index: 1;
  display: inline-block;
  padding: 0 20px;
  background-color: #f2395a;
  background-size: 20px 20px;
  background-image: -webkit-linear-gradient(
    45deg,
    rgb(255 255 255 / 15%) 25%,
    transparent 25%,
    transparent 50%,
    rgb(255 255 255 / 15%) 50%,
    rgb(255 255 255 / 15%) 75%,
    transparent 75%,
    transparent
  );
  border: solid 1px #f02146;
  border-bottom-width: 3px;
  color: white;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-size: 40px 40px;
  }
`;
const Register = () => {
  return (
    <Container>
          <Navigation/>
            <RegisterWrapper>
                <RegisterBlock>
                    <Title>
                        Create an account
                    </Title>
                    <Desc>Quickly &amp; easily create an account using the form below.</Desc>
                    <Form action={""}>
                        <Input type="text" placeholder="Name" />
                        <Input type="text" placeholder="Last name" />
                        <Input type="text" placeholder="Username" />
                        <Input type="email" placeholder="Enter your email" />
                        <Input type="password" placeholder="Enter your password" />
                        <Input type="password" placeholder="Confirm your password" />
                        <Submit type="submit" value={"Create my account"}/> 
                    </Form>
                </RegisterBlock>
            </RegisterWrapper>
    </Container>
  )
}

export default Register