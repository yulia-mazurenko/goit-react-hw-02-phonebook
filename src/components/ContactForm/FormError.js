import styled from 'styled-components';
import { ErrorMessage } from 'formik';

const ErrorText = styled.p`
  color: red;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.xs};
`;

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};
export default FormError;
