import { create } from 'zustand';
import { Status } from '../services/types';

interface Filters {
  status?: Status;
  name?: string;
}

interface AppState {
  filters: Filters;
  updateStatusFilter: (status: Status) => void;
  updateNameFilter: (name: string) => void;
  clearStatusFilter: () => void;
  clearNameFilter: () => void;
}

const useStore = create<AppState>(set => ({
  filters: {},
  updateStatusFilter: newStatus =>
    set(state => ({ filters: { ...state.filters, status: newStatus } })),
  clearStatusFilter: () => set(state => ({ filters: { ...state.filters, status: undefined } })),
  updateNameFilter: (name) => set(state => ({ filters: { ...state.filters, name } })),
  clearNameFilter: () => set(state => ({ filters: { ...state.filters, name: undefined } })),
}));

export default useStore;
