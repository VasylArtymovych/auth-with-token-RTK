import styled from 'styled-components';

export const List = styled.ul`
  padding: ${p => p.theme.space[4]}px;
  background: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.normal};
`;
