import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${p => p.theme.sizes.input};
`;

export const DeleteButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  color: ${p => p.theme.colors.accentColor};
  transform: scale(1);

  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;
