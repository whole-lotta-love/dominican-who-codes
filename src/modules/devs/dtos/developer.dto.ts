import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export interface IDeveloper {
  name: string;
  initials: string;
  image?: URL;
  summary: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
}

export default class Developer implements IDeveloper {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly initials: string;

  @IsString()
  @IsNotEmpty()
  readonly summary: string;

  @IsUrl()
  readonly image?: URL;

  @IsString()
  readonly linkedin?: string;

  @IsString()
  readonly github?: string;

  @IsString()
  readonly twitter?: string;

  constructor(props: Developer) {
    this.name = props.name;
    this.initials = props.initials;
    this.summary = props.summary;
    this.image = props.image;
    this.linkedin = props.linkedin;
    this.github = props.github;
    this.twitter = props.twitter;
  }
}
