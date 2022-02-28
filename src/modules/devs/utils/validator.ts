import { validateOrReject } from 'class-validator';
import Developer, { IDeveloper } from '../dtos/developer.dto';

export default async function validator(data: IDeveloper): Promise<Developer> {
  const developer = new Developer(data);

  try {
    await validateOrReject(developer);
  } catch (err) {
    return null;
  }
  return developer;
}
