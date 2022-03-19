import styled from 'styled-components';

export const StyledSkills = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 0.5em;

  span {
    padding: 0.1em;
    border-radius: 3px;
    margin: 0.5em 0;
    color: ${(props) => props.theme.bg0};
    background-color: ${(props) => props.theme.solid};
  }
`;
