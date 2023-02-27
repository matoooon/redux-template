import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MovieInterface } from './interfaces/movie.interface';
import { SearchInterface } from './interfaces/search.interface';
import { MovieService } from './services/movie.service';
import { loadedMovies, searchMovies } from './store/actions/movies.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'redux-template';

  stateMovies: any;
  inputSearch: FormControl;

  constructor(
    private store: Store<{ movies: any }>,
    private movieService: MovieService
  ) {
    store.select('movies').subscribe({
      next: (data: MovieInterface[]) => {
        console.log(data);
        this.stateMovies = data;
      },
    });
    this.inputSearch = new FormControl();;
  }

  getProducts() {
    this.store.dispatch(searchMovies({search: this.inputSearch.value}));
  }
}
