import { createEntityAdapter } from '@reduxjs/toolkit';
import Developer from '../dtos/developer.dto';

const developersAdapter = createEntityAdapter<Developer>({
  selectId: (dev) => dev.name,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export default developersAdapter;
