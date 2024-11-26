import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  imports: [PokemonTypeColorPipe, CommonModule],
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
      this.pokemon = this.pokemonService.getPokemonByID(+pokemonId);
    } else {
      console.error('No pokemon found with this id');
      return;
    }
  }

  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }

}
