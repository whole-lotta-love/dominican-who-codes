import { FunctionComponent, ReactElement } from 'react';
import SkillIconComponent from './SKill-icon';
import { StyledSkills } from './Skils.styled';

interface SkillsProps {
  list: string[];
}

const Skills: FunctionComponent<SkillsProps> = ({ list }): ReactElement => {
  return (
    <StyledSkills>
      {list.map((skill, key) => (
        <SkillIconComponent key={key} icon={skill} />
      ))}
    </StyledSkills>
  );
};
export default Skills;
