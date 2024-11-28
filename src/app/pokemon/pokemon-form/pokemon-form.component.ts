import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';

@Component({
  selector: 'app-pokemon-form',
  imports: [FormsModule, PokemonTypeColorPipe, CommonModule],
  templateUrl: './pokemon-form.component.html'
})
export class PokemonFormComponent implements OnInit {

  @Input() pokemon: Pokemon;
  types: string[];

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string) {
    const isChecked = ($event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      if (index > -1) {
        this.pokemon.types.splice(index, 1);
      }
    }
  }

  isTypesValid(type: string): boolean {

    if (this.pokemon.types.length == 1 && this.hasType(type)) {
      return false;
    } else if (this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false;
    }

    return true;
  }

  onSubmit() {
    this.pokemonService.updatePokemon(this.pokemon).subscribe((pokemon) => {
      if (pokemon) {
        this.router.navigate([`/pokemon/${pokemon.id}`])
      }
      else {
        console.error('Error updating pokemon');
      }
    })
   
  }

}
