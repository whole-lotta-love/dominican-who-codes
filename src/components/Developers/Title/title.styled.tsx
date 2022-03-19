import styled from 'styled-components';

export interface StyledProps {
  size?: number;
  bold?: boolean;
}

export const StyledTitle = styled.h5<StyledProps>`
  padding: 0.2em 0;
  font-size: ${(props) => props.size || 1}em;
  font-weight: ${(props) => (props.bold ? 'bold' : 100)};
`;
