import styled from 'styled-components';

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Logo = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;

  span {
    color: red;
  }
`;

const Description = styled.p`
  font-family: monospace;
`;
const Icon = styled.i`
  margin-right: 0.5rem;
`;
const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px; 
`;

const SocialIcon = styled.i`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 0.5rem 0;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const ContactIcon = styled(Icon)`
  font-size: 1.2rem;
  color: #999;
`;

const ContactText = styled.p`
  margin: 0;
  color: #666;
`;

const Footer = () => {
  return (
    <Container>
      <Section>
        <Logo><span>Git</span>Shop</Logo>
        <Description>
          Lorem nulla ullamco voluptate velit qui reprehenderit.
        </Description>
        <SocialIcons>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </SocialIcons>
      </Section>
      <Section>
        <SectionTitle>Useful Links</SectionTitle>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Men's Fashion</ListItem>
          <ListItem>Women's Fashion</ListItem>
        </List>
      </Section>
      <Section>
        <SectionTitle>Contact Us</SectionTitle>
        <ContactInfo>
          <ContactIcon className="fa fa-map-marker" aria-hidden="true" />
          <ContactText>123 Main St, Anytown USA</ContactText>
        </ContactInfo>
        <ContactInfo>
          <ContactIcon className="fa fa-envelope-o" aria-hidden="true" />
          <ContactText>support@gitshop.com</ContactText>
        </ContactInfo>
        <ContactInfo>
          <ContactIcon className="fa fa-mobile" aria-hidden="true" />
          <ContactText>(555) 555-5555</ContactText>
        </ContactInfo>
      </Section>
    </Container>
  );
};

export default Footer;
