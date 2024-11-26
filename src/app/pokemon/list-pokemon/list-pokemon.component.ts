import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { CommonModule } from '@angular/common';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  imports: [CommonModule, PokemonTypeColorPipe, RouterModule],
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined

  constructor(private router: Router) {

  }

  goToPokemon(pokemonId: number) {
    this.router.navigate([`/pokemon/${pokemonId}`]);
  }

}
