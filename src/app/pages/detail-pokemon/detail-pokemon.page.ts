import { Component, OnInit } from '@angular/core';
import {NavController, NavParams} from "@ionic/angular";
import {Pokemon} from "../../models/pokemon";

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.page.html',
  styleUrls: ['./detail-pokemon.page.scss'],
})
export class DetailPokemonPage {

  public pokemon: Pokemon;

  constructor(
    private navParams: NavParams,
    private navController: NavController,
  ) {
    this.pokemon = this.navParams.data["pokemon"];
    console.log(this.pokemon);
  }

  goBack() {
    this.navController.pop();
  }
}
