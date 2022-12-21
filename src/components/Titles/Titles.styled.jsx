import styled from 'styled-components';

export const PhoneBookTitle = styled.h1`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.accentColor};

  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const ListTitle = styled.h2`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.accentColor};

  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Wrapper = styled.div`
  padding: 30px;
  width: ${p => p.theme.sizes.wrapper};
`;
