import styled from "styled-components"
import Navigation from "../Components/Navigation"

const Container = styled.div`
    background: url("https://th.bing.com/th/id/R.f7f539df1f3f4d0fd9a7aa0e7cbb65d8?rik=nN3s9NQOY2uOYQ&pid=ImgRaw&r=0") no-repeat;
    background-size: cover;
    background-position: 40% 35%;
    box-shadow: 5px 5px 10px #6E6E6E;
`

const RegisterWrapper = styled.div`
    position: relative;
    padding: 180px;
    color: #999;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
`
const RegisterBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 10px 50px;
    background: white;
    box-shadow: 0 0 50px rgb(0,0,0,0.2);
    border-radius: 10px;
`
const Form = styled.form`
    margin-top: 25px;
    margin-right: 30px;
    display: grid;
    grid-template-rows: repeat(4,auto);
    grid-template-columns: repeat(2,auto);
    grid-gap: 10px 50px;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;
`
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
`
const Title = styled.h3`
        font-size: 1.6rem;
    padding-bottom: 20px;
    margin: 0 0 20px;
    border-bottom: dashed 1px #e6e6e6;
`
const Desc = styled.p`
    
`
const Submit = styled.input`
    position: relative;
    z-index: 1;
    display: inline-block;
    padding: 0 20px;
    background-color: #f2395a;
    background-size: 20px 20px;
    background-image: -webkit-linear-gradient(
                                     45deg,
                                     rgb(255,255,255, 0.15) 25%,
                                     rgb(0,0,0,0) 25%,
                                     rgb(0,0,0,0) 50%,  
                                     rgb(255,255,255,0.15) 50%,
                                     rgb(255,255,255,0.15) 75%,
                                     rgb(0,0,0,0) 75%,
                                     rgb(0,0,0,0)    
    );
    border:  solid 1px #f02146;
    border-bottom-width: 3px;
    color: white;
    outline: none;
    cursor: pointer;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;

    &:hover {
        background-size: 40px 40px;
    }
`
const Links = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-style: italic;
    cursor: pointer;
`
const Link = styled.a`

`

const Login = () => {
  return (
    <Container>
            <Navigation/>
            <RegisterWrapper>
                <RegisterBlock>
                    <Title>
                        Sign in
                    </Title>
                    <Desc>Quickly Log in to your account using the form below.</Desc>
                    <Form action={""}>
                        <Input type="email" placeholder="Enter your email" />
                        <Input type="password" placeholder="Enter your password" />
                        <Submit type="submit" value={"Log in"}/> 
                        <Links>
                            <Link>DO NOT REMEMBER YOUR PASSWORD ?</Link>
                            <Link>CREATE A NEW ACCOUNT</Link>
                        </Links>
                    </Form>
                </RegisterBlock>
            </RegisterWrapper>
    </Container>
  )
}

export default Login