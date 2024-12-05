import { Routes } from '@angular/router';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { MovieListComponent } from './movie-list/movie-list.component';
export const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'create', component: MovieCreateComponent },
];
