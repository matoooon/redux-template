import { createAction, props } from '@ngrx/store';
import { MovieInterface } from 'src/app/interfaces/movie.interface';

export const loadingMovies = createAction('[Loading Movies]');

export const loadedMovies = createAction('[Load Movies]', props<{data: MovieInterface[]}>());
export const searchMovies = createAction('[Search Movies]', props<{search: string}>());
