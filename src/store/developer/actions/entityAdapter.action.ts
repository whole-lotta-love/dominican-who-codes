import { createEntityAdapter } from '@reduxjs/toolkit';
import { IDeveloperProfile } from '../models/profile.entity';

const adapter = createEntityAdapter<IDeveloperProfile>({
  selectId: (devProfile) => devProfile.id,
  sortComparer: (x, y) => x.name.localeCompare(y.name),
});
export default adapter;
