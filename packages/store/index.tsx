import create from "zustand";

import shallow from "zustand/shallow";

export type Movie = {
	title: string;
	image: string;
};

export const useStore = create<{
	movies: Movie[];
	addMovie: (movie: Movie) => void;
	removeMovie: (movieName: string) => void;
}>((set) => ({
	movies: [],
	addMovie: (movie) => set((state) => ({ movies: [...state.movies, movie] })),
	removeMovie: (movieName) =>
		set((state) => ({
			movies: state.movies.filter((movie) => movie.title !== movieName),
		})),
}));
