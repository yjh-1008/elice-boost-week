import styled from 'styled-components';
import Header from '@/components/header';
const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
  min-height: 100vh;
  @media (max-width: 1280px) {
    max-width: 100%;
  }
`;
const HeaderContainer = styled.div`
  max-width: 100vw;
`;

interface LayoutProps {
  children: React.ReactNode;
}
  
export default function GlobalLayout({ children }: LayoutProps) {
  return (
    <HeaderContainer>
      <Header />
      <Container> {children} </Container>
    </HeaderContainer>
  );
}
