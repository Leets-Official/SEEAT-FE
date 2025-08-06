import { create } from 'zustand';

interface CinemaInfo {
  name: string;
  hall: string;
  id: string;
}

interface ReviewState {
  reviewTitle: string; //후기 제목
  setReviewTitle: (title: string) => void;
  movieTitle: string;
  cinema: CinemaInfo | null;
  seats: string[];
  text: string;
  rating: number;
  seatIds: string[];
  resetSeats: () => void;
  addSeatId: (id: string) => void;
  removeSeatId: (id: string) => void;
  setRating: (value: number) => void;
  setTitle: (title: string) => void;
  setCinema: (cinema: CinemaInfo) => void;
  addSeat: (seat: string) => void;
  removeSeat: (seat: string) => void;
  setText: (text: string) => void;
  isInitialized: boolean;
  setInitialized: () => void;
  reset: () => void;
  tags: Record<'음향' | '관람환경' | '동반인', number[]>;
  setTags: (type: '음향' | '관람환경' | '동반인', tags: number[]) => void;
  toggleTag: (type: '음향' | '관람환경' | '동반인', tag: number) => void;
}

export const useReviewStore = create<ReviewState>((set) => ({
  reviewTitle: '',
  setReviewTitle: (title) => set({ reviewTitle: title }),
  movieTitle: '',
  cinema: null,
  seats: [],
  text: '',
  rating: 0,
  isInitialized: false,
  setInitialized: () => set({ isInitialized: true }),
  setRating: (value) => set({ rating: value }),
  setTitle: (movieTitle) => set({ movieTitle }),
  seatIds: [],
  resetSeats: () =>
    set({
      seats: [],
      seatIds: [],
    }),
  addSeatId: (id) =>
    set((state) => (state.seatIds.includes(id) ? state : { seatIds: [...state.seatIds, id] })),
  removeSeatId: (id) =>
    set((state) => ({
      seatIds: state.seatIds.filter((s) => s !== id),
    })),
  setCinema: (cinema) => set({ cinema }),
  addSeat: (seat) =>
    set((state) => (state.seats.includes(seat) ? state : { seats: [...state.seats, seat] })),
  removeSeat: (seat) =>
    set((state) => ({
      seats: state.seats.filter((s) => s !== seat),
    })),
  setText: (text) => set({ text }),
  reset: () =>
    set({
      movieTitle: '',
      reviewTitle: '',
      cinema: null,
      seats: [],
      rating: 0,
      text: '',
      tags: {
        음향: [],
        관람환경: [],
        동반인: [],
      },
      seatIds: [],
      isInitialized: false,
    }),
  tags: {
    음향: [],
    관람환경: [],
    동반인: [],
  },
  setTags: (type, tags) =>
    set((state) => ({
      tags: {
        ...state.tags,
        [type]: tags,
      },
    })),
  toggleTag: (type, tagId) =>
    set((state) => {
      const current = state.tags[type] ?? [];
      const isSelected = current.includes(tagId);

      const totalSelected = Object.values(state.tags).flat().length;

      if (isSelected) {
        return {
          tags: {
            ...state.tags,
            [type]: current.filter((id) => id !== tagId),
          },
        };
      }
      if (totalSelected < 5) {
        return {
          tags: {
            ...state.tags,
            [type]: [...current, tagId],
          },
        };
      }

      return {};
    }),
}));
