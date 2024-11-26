import { Routes } from '@angular/router';
import { ListPokemonComponent } from './pokemon/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './pokemon/detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './pokemon/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pokemon/pokemon.routes').then(m => m.pokemonRoutes)
    },
    { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
