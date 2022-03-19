import { FunctionComponent, ReactElement } from 'react';
import { StyledContent } from './Content.styled';

interface ContentProps {
  text: string;
}

const ContentComponent: FunctionComponent<ContentProps> = ({
  text,
}): ReactElement => {
  return <StyledContent>{text}</StyledContent>;
};
export default ContentComponent;
