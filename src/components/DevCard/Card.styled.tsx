import styled from 'styled-components';

export const Card = styled.div`
  padding: 0.5em 0;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const Skills = styled.div`
  display: flex;
  gap: 0.1em;
  margin: 0.5em 0;
  span {
    border: solid 1px;
  }
`;

export const Description = styled.div`
  margin: 0.5em 1em;
`;

interface TitleProps {
  bold?: boolean;
  color?: string;
}
export const Title = styled.p<TitleProps>`
  padding: 0.2em;
  margin: 0.5em 0;
  font-size: 1rem;
  font-weight: ${(props) => (props.bold ? 'bold' : 100)};
  color: ${(props) => props.theme.fg};
`;
