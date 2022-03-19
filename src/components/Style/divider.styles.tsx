import styled from 'styled-components';

export const Divider = styled.hr`
  border-radius: 0;
  height: 2px;
  border: none;
  border-bottom: 2px dashed ${(props) => props.theme.main};
`;
