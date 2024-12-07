import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

export default function Header() {
  return <Container>
    <h1>헤더</h1>
  </Container>;
}
