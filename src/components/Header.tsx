import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 0 12px;
  background-color: white;
  height: 60px;
`;

const Logo = styled.div`
  font-size: 24px;
  color: purple;
`;

export default function Header() {
  return <Container>
    <Logo>Elice School</Logo>
  </Container>;
}
