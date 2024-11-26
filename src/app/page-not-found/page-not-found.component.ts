import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  imports: [RouterLink],
  template: `
    <div class='flex flex-col items-center justify-center'>
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"/>
      <h1 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Hey, cette page n'existe pas !</h1>
      <a routerLink="/pokemons" class="text-white bg-blue-700 mt-10 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Retourner à l' accueil
      </a>
    </div>
  `,
})
export class PageNotFoundComponent {

}
