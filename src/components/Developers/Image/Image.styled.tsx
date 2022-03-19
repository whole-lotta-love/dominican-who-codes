import styled, { StyledComponent } from 'styled-components';

interface StyledProps {
  height: number;
  width: number;
}

export const ImageStyled = styled.figure<StyledProps>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
`;
