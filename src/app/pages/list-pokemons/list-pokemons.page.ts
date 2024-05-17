import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import {Pokemon} from "../../models/pokemon";

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.page.html',
  styleUrls: ['./list-pokemons.page.scss'],
})
export class ListPokemonsPage implements OnInit {

  public pokemons: Pokemon[];

  constructor(
    private pokemonService: PokemonService
  ) {
    this.pokemons = []
  }

  ngOnInit() {
    this.morePokemon()
  }

  morePokemon() {
    const promise = this.pokemonService.getPokemons();

    if(promise){
      promise.then((result: Pokemon[]) => {

        console.log(result)

        this.pokemons = this.pokemons.concat(result);

        console.log(this.pokemons);

      })
    }
  }

}
