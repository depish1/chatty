import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.containerBackground};
  border-radius: ${({ theme }) => theme.borderRadius.wrapper};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem min(4rem, 10%);
  width: min(40rem, 95%);
`;
