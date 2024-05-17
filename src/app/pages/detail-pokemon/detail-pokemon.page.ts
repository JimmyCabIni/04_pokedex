import { Component, OnInit } from '@angular/core';
import {NavParams} from "@ionic/angular";
import {Pokemon} from "../../models/pokemon";

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.page.html',
  styleUrls: ['./detail-pokemon.page.scss'],
})
export class DetailPokemonPage implements OnInit {

  public pokemon: Pokemon;

  constructor(
    private navParams: NavParams,
  ) {
    this.pokemon = this.navParams.data["pokemon"];
    console.log(this.pokemon);
  }

  ngOnInit() {
  }

}
