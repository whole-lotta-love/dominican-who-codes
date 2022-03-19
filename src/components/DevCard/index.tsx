import { FunctionComponent, ReactElement } from 'react';
import { Card, Description, Skills, Title } from './Card.styled';
import { IDeveloperProfile } from '@src/store/developer/models/profile.entity';
import Image from 'next/image';

interface DeveloperProps {
  profile: IDeveloperProfile;
}

const Developer: FunctionComponent<DeveloperProps> = ({
  profile,
}): ReactElement => {
  return (
    <Card>
      <Title bold>{profile.summary}</Title>
      <Skills>
        {profile.skills.map((skill, key) => (
          <span key={key}>{skill}</span>
        ))}
      </Skills>
      <figure>
        <Image
          src={profile.image}
          alt={profile.name}
          layout="responsive"
          height={200}
          width={200}
        />
      </figure>
      <div>
        <Title>{profile.name}</Title>
        <Description>description here!</Description>
      </div>
    </Card>
  );
};
export default Developer;
