import { FunctionComponent, ReactElement } from 'react';
import { StyledSkills } from './Skils.styled';

interface SkillsProps {
  list: string[];
}

const Skills: FunctionComponent<SkillsProps> = ({ list }): ReactElement => {
  return (
    <StyledSkills>
      {list.map((skill, key) => (
        <span key={key}>{skill}</span>
      ))}
    </StyledSkills>
  );
};
export default Skills;
