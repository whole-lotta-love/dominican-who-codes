import { createEntityAdapter } from '@reduxjs/toolkit';
import Developer from '../dtos/developer.dto';

const developersAdapter = createEntityAdapter<Developer>({
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export default developersAdapter;
