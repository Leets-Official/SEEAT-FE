import { create } from 'zustand';

interface SelectedSeatsState {
  selectedSeats: string[];
  toggleSeat: (seatId: string) => void;
  resetSeats: () => void;
}

export const useSelectedSeatsStore = create<SelectedSeatsState>((set) => ({
  selectedSeats: [],
  toggleSeat: (seatId) =>
    set((state) => ({
      selectedSeats: state.selectedSeats.includes(seatId)
        ? state.selectedSeats.filter((id) => id !== seatId)
        : [...state.selectedSeats, seatId],
    })),
  resetSeats: () => set({ selectedSeats: [] }),
}));
