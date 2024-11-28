import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-detail-pokemon',
  imports: [PokemonTypeColorPipe, CommonModule, HttpClientModule],
  templateUrl: './detail-pokemon.component.html',
  providers: [PokemonService]
})
export class DetailPokemonComponent implements OnInit {

  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

    if (pokemonId) {
      this.pokemonService.getPokemonByID(+pokemonId).subscribe(pokemon => this.pokemon = pokemon);
    } else {
      console.error('No pokemon found with this id');
      return;
    }
  }

  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }

  goToEditPokemon(pokemonId: number) {
    this.router.navigate([`/edit/pokemon/${pokemonId}`]);
  }

}
