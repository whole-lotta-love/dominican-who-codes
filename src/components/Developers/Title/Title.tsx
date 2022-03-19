import { FunctionComponent, ReactElement } from 'react';
import { StyledTitle } from './title.styled';

interface TitleProps {
  text: string;
  bold?: boolean;
}

const TitleComponent: FunctionComponent<TitleProps> = ({
  text,
  bold,
}): ReactElement => {
  return <StyledTitle bold={bold}>{text}</StyledTitle>;
};
export default TitleComponent;
