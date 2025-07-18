import { create } from 'zustand';

interface ReviewState {
  movieTitle: string;
  cinema: string;
  seats: string[];
  setTitle: (title: string) => void;
  setCinema: (cinema: string) => void;
  addSeat: (seat: string) => void;
  removeSeat: (seat: string) => void;
  reset: () => void;
}

export const useReviewStore = create<ReviewState>((set) => ({
  movieTitle: '',
  cinema: '',
  seats: [],
  setTitle: (movieTitle) => set({ movieTitle }),
  setCinema: (cinema) => set({ cinema }),
  addSeat: (seat) =>
    set((state) => (state.seats.includes(seat) ? state : { seats: [...state.seats, seat] })),
  removeSeat: (seat) =>
    set((state) => ({
      seats: state.seats.filter((s) => s !== seat),
    })),
  reset: () => set({ movieTitle: '', cinema: '', seats: [] }),
}));
