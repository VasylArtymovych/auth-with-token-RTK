import styled from 'styled-components';

export const Container = styled.div`
  width: 90vw;
  padding: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[4]}px;
  background: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.medium};
  @media ${p => p.theme.media.tablet} {
    width: 80vw;
  }
  @media ${p => p.theme.media.desktop} {
    width: 768px;
  }
`;

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  text-align: center;
  margin-bottom: ${p => p.theme.space[4]}px;
`;
