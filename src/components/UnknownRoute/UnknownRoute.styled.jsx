import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  & p {
    font-size: ${({ theme }) => theme.fontSizes.l}px;
    color: ${({ theme }) => theme.colors.title};
  }
`;
