import styled from 'styled-components';

export const ImgWrap = styled('div')`
  width: 40px;
  height: 40px;
  margin-right: 7px;
  background-color: ${({ theme }) => theme.colors.title};
  border-radius: 50%;
  overflow: hidden;
`;

export const Container = styled('div')`
  display: flex;
  align-items: center;
  height: 100%;

  & span {
    font-size: ${({ theme }) => theme.fontSizes.s}px;
    color: ${({ theme }) => theme.colors.title};
    margin-right: 7px;
    @media ${({ theme }) => theme.media.tablet} {
      font-size: ${({ theme }) => theme.fontSizes.m}px;
    }
  }
`;

export const Button = styled('button')`
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.accent};
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.active};
  }
`;
