import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [CommonModule],
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined

  ngOnInit(): void {
    //console.t able(this.pokemonList)
  }

  selectPokemon(pokemonId: string) {

    const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    if (pokemon) {
      this.pokemonSelected = pokemon;
      console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}`)
    } else {
      this.pokemonSelected = pokemon;
      console.log(`Vous avez demandé le pokemon non existant`)
    }
  }
}
