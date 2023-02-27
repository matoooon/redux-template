import { createReducer, on } from '@ngrx/store';
import { loadedMovies, loadingMovies } from '../actions/movies.actions';

interface InitialStateInterface {
  loading: boolean;
  data: any[];
  loaded: boolean;
}

export const initialState: InitialStateInterface = {
  loading: false,
  data: [],
  loaded: false,
};

export const moviesReducer = createReducer(
  initialState,
  on(loadingMovies, (state) => {
    return {
      ...initialState,
      loading: true,
    };
  }),
	on(loadedMovies, (state, {data}) => {
    return {
      ...initialState,
      loaded: true,
			data: data
    };
  })
);
