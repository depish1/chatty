import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`;
