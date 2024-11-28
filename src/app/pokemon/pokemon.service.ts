import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable()
export class PokemonService {

  constructor(
    private http: HttpClient
  ) { }

  getPokemonsLsit(): Observable<Pokemon[]> {
    //return POKEMONS
    return this.http.get<Pokemon[]>('http://localhost:8000/api/pokemons').pipe(
      tap((pokemonList: Pokemon[]) => this.log(pokemonList)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getPokemonByID(pokemonId: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`http://localhost:8000/api/pokemons/${pokemonId}`).pipe(
      tap((pokemon: Pokemon) => this.log(pokemon)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon | undefined> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put<Pokemon>(`http://localhost:8000/api/pokemons/${pokemon.id}`, pokemon, httpOptions).pipe(
      tap((updatedPokemon: Pokemon) => this.log(updatedPokemon)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  private log(response: Pokemon[] | Pokemon | undefined) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  getPokemonTypeList(): string[] {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Vol',
      'Poison',
      'Fée',
      'Psy',
      'Electrik',
      'Combat'
    ]
  }

}
