import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #232129;
  border-radius: 10px;
  margin-bottom: 8px;

  align-items: center;
  flex-direction: row;
  border-width: 2px;
  border-color: #232129;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #ff9000;
    `}
`;

const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-family: 'RobotoSlab-Regular';
`;

const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

export { Container, TextInput, Icon };
