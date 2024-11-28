import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-edit-pokemon',
  imports: [PokemonFormComponent, CommonModule, HttpClientModule],
  template: `
    <h1 class="mb-4 text-2xl flex justify-center font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Edition {{pokemon?.name}}</h1>
    <p *ngIf="pokemon" class="flex justify-center">
      <img [src]="pokemon?.picture" alt="">
    </p>
    <app-pokemon-form  [pokemon]="pokemon!"></app-pokemon-form>
  `,
  providers: [PokemonService]                                                     
})
export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
  ) { }

  ngOnInit() {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

    if (pokemonId) {
      this.pokemonService.getPokemonByID(+pokemonId).subscribe(pokemon => this.pokemon = pokemon);
    } else {
      console.error('No pokemon found with this id');
    }
  }

}
