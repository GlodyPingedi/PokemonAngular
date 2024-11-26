import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-pokemon',
  imports: [PokemonTypeColorPipe, CommonModule],
  templateUrl: './detail-pokemon.component.html',

})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.pokemonList = POKEMONS;
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

    if (pokemonId) {
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == Number(pokemonId));
    } else {
      console.error('No pokemon found with this id');
      return;
    }
  }

  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }

}