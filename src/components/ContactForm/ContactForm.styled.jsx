import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  width: ${p => p.theme.sizes.form};
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.accentColor};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${p => p.theme.space[2]}px;
`;

export const Input = styled(Field)`
  width: ${p => p.theme.sizes.input};
  box-sizing: border-box;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.normal};
  font-family: ${p => p.theme.fonts.body};

  &:focus,
  &:hover,
  &:active {
    outline: 0;
    border-color: ${p => p.theme.colors.accentColor};
  }
`;

export const Button = styled.button`
  width: ${p => p.theme.sizes.button};
  font-family: ${p => p.theme.fonts.body};
  font-weight: bold;

  background-color: ${p => p.theme.colors.secondary};
  color: ${p => p.theme.colors.accentColor};
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.accentColor};
  border-radius: ${p => p.theme.radii.normal};

  cursor: pointer;
`;
