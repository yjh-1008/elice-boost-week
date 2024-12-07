import styled from 'styled-components';

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
  @media (max-width: 1280px) {
    max-width: 100%;
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

export default function GlobalLayout({ children }: LayoutProps) {
  return <Container>{children}</Container>;
}
