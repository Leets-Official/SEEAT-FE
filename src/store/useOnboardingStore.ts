import { create } from 'zustand';
import type { GenreType, CinemaType, CinemaFormat } from '@/types/onboarding';

interface OnboardingState {
  nickname: string;
  selectedGenres: GenreType[];
  selectedCinemas: CinemaType[];
  cinemaFormat: CinemaFormat;
  setNickname: (name: string) => void;
  toggleGenre: (genre: GenreType) => void;
  toggleCinema: (cinema: CinemaType) => void;
  setCinemaFormat: (format: CinemaFormat) => void;
  genre: GenreType[];
  setGenre: (genres: GenreType[]) => void;
}

export const useOnboardingStore = create<OnboardingState>((set, get) => ({

  genre: [],
  setGenre: (genres) => set({ genre: genres }),
  
  nickname: '',
  selectedGenres: [],
  selectedCinemas: [],
  cinemaFormat: 'IMAX',

  setNickname: (name) => set({ nickname: name }),

  toggleGenre: (genre) => {
    const genres = get().selectedGenres;
    const updated = genres.includes(genre)
      ? genres.filter((g) => g !== genre)
      : genres.length < 3
        ? [...genres, genre]
        : genres;
    set({ selectedGenres: updated });
  },

  toggleCinema: (cinema) => {
    const cinemas = get().selectedCinemas;
    const updated = cinemas.includes(cinema)
      ? cinemas.filter((c) => c !== cinema)
      : cinemas.length < 3
        ? [...cinemas, cinema]
        : cinemas;
    set({ selectedCinemas: updated });
  },

  setCinemaFormat: (format) => set({ cinemaFormat: format }),
}));