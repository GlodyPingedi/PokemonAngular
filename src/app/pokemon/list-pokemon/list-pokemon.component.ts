import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { CommonModule } from '@angular/common';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  imports: [CommonModule, PokemonTypeColorPipe, RouterModule],
  templateUrl: './list-pokemon.component.html',
  providers: [PokemonService]
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemonSelected: Pokemon | undefined;

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.pokemonList = this.pokemonService.getPokemonsLsit();
  }

  goToPokemon(pokemonId: number) {
    this.router.navigate([`/pokemon/${pokemonId}`]);
  }

}
