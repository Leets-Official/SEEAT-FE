import { create } from 'zustand';
import { genreMap, type GenreEnType, type GenreType } from '@/types/movieGenre';
import type { CinemaType, CinemaFormat } from '@/types/onboarding';

interface OnboardingState {
  profileImageFilename: string;
  nickname: string;
  genre: GenreType[];
  selectedGenres: GenreEnType[];
  selectedCinemas: string[];
  cinemaFormat: CinemaFormat;
  setNickname: (name: string) => void;
  toggleGenre: (genre: GenreType) => void;
  toggleCinema: (cinema: CinemaType) => void;
  setCinemaFormat: (format: CinemaFormat) => void;
  setProfileImageFilename: (filename: string) => void;
  setGenre: (genres: GenreType[]) => void;
  setSelectedGenres: (genres: GenreEnType[]) => void;
  setSelectedCinemas: (cinemas: CinemaType[]) => void;
}

export const useOnboardingStore = create<OnboardingState>((set, get) => ({
  genre: [],
  setGenre: (genres) => set({ genre: genres }),

  nickname: '',
  selectedGenres: [],
  selectedCinemas: [],
  cinemaFormat: 'IMAX',

  profileImageFilename: '',
  setProfileImageFilename: (filename) => set({ profileImageFilename: filename }),

  setNickname: (name) => set({ nickname: name }),

  toggleGenre: (genre) => {
    const genres = get().selectedGenres;
    const genreEn = genreMap[genre]; // 한글 → 영어로 변환

    const updated = genres.includes(genreEn)
      ? genres.filter((g) => g !== genreEn)
      : genres.length < 3
        ? [...genres, genreEn]
        : genres;
    set({ selectedGenres: updated });
    console.log('장르: ', updated);
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

  setSelectedGenres: (genres) => set({ selectedGenres: genres }),

  setCinemaFormat: (format) => set({ cinemaFormat: format }),

  setSelectedCinemas: (cinemas) => set({ selectedCinemas: cinemas }),
}));