import styled from 'styled-components';

export const Container = styled('div')`
  padding: ${({ theme }) => theme.space[3]}px ${({ theme }) => theme.space[4]}px;
  margin: 0 auto;
  @media ${({ theme }) => theme.media.tablet} {
    width: 768px;
  }
  @media ${({ theme }) => theme.media.desktop} {
    width: 1024px;
  }
`;

export const HomeTitle = styled('h1')`
  margin: ${({ theme }) => theme.space[5]}px 0px;
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.title};
  text-shadow: -2px -2px 0 ${({ theme }) => theme.colors.primary},
    2px -2px 0 ${({ theme }) => theme.colors.primary},
    -2px 2px 0 ${({ theme }) => theme.colors.primary},
    2px 2px 0 ${({ theme }) => theme.colors.primary};
`;

export const HomeText = styled('p')`
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.active};
`;
