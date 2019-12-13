import styled from "styled-components";

const CardBody = styled.div`
  margin: 0 auto;
  max-width: 70%;
`;

const Logo = styled.img`
  width: 20%;
`;

const Header = styled.header`
  margin-top: 4%;
`;

const Today = styled.h2`
  font-size: 1.6rem;
`;

const Title = styled.h1`
  margin-top: 2%;
  font-size: 1.5rem;
  text-decoration: underline;
`;

const Apod = styled.img`
  max-width: 100%;
`;

const Description = styled.p`
  margin-top: 4%;
  font-size: 1.4rem;
  line-height: 1.5;
`;

const Top = styled.div`
  text-align: center;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export { CardBody, Logo, Header, Apod, Description, Top, Title, Today };
