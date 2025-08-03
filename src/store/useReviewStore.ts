import { create } from 'zustand';

interface CinemaInfo {
  name: string;
  hall: string;
}

interface ReviewState {
  reviewTitle: string; //후기 제목
  setReviewTitle: (title: string) => void;
  movieTitle: string;
  cinema: CinemaInfo | null;
  seats: string[];
  text: string;
  rating: number;
  setRating: (value: number) => void;
  setTitle: (title: string) => void;
  setCinema: (cinema: CinemaInfo) => void;
  addSeat: (seat: string) => void;
  removeSeat: (seat: string) => void;
  setText: (text: string) => void;
  isInitialized: boolean;
  setInitialized: () => void;
  reset: () => void;
  tags: Record<string, string[]>;
  setTags: (type: '음향' | '관람환경' | '동반인', tags: string[]) => void;
  toggleTag: (type: '음향' | '관람환경' | '동반인', tag: string) => void;
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
        sound: [],
        environment: [],
        companion: [],
      },
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
  toggleTag: (type, tag) =>
    set((state) => {
      const current = state.tags[type] ?? [];
      const isSelected = current.includes(tag);

      const totalSelected = Object.values(state.tags).flat().length;

      if (isSelected) {
        return {
          tags: {
            ...state.tags,
            [type]: current.filter((t) => t !== tag),
          },
        };
      }
      if (totalSelected < 5) {
        return {
          tags: {
            ...state.tags,
            [type]: [...current, tag],
          },
        };
      }

      return {};
    }),
}));
