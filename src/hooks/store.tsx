import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store/store';

// Export react redux hooks with the application context type
export const useAppDipatch = () => useDispatch<AppDispatch>();
export const useAppSelecto: TypedUseSelectorHook<RootState> = useSelector;
