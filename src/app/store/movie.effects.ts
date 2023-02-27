import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { SearchInterface } from '../interfaces/search.interface';
import { MovieService } from '../services/movie.service';
import { loadedMovies, searchMovies } from './actions/movies.actions';

@Injectable()
export class MovieEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchMovies),
      mergeMap((action: any) =>
        this.movieService.getMovies(action.search).pipe(
          map((data: SearchInterface) => loadedMovies({ data: data.Search })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private movieService: MovieService) {}
}
