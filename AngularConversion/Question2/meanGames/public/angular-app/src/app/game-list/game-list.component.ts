import { Component, OnInit } from '@angular/core';

import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  title: string = "Mean Games";

  games: Game[] = [];

  constructor(private gamesDataService: GamesDataService) { }

  ngOnInit(): void {
    this.getGames();
    console.log(this.games);

  }

  public getGames(): void {
    this.gamesDataService.getGames().then(foundGames => this.games = foundGames);
  }

  public addGame(value: JSON): void {
    // const postData = {
    //   title: value[0],
    //   price: vm.newGamePrice,
    //   year: vm.newGameYear,
    //   minPlayers: vm.newGameMinPlayers,
    //   minAge: vm.newGameMinAge,
    //   maxPlayers: vm.newGameMaxPlayers,
    //   rate: vm.newGameRating
    // }
    this.gamesDataService.addGame(value).then(() => console.log("Game saved"));
    console.log(value);
  }

}
export class Game {
  _id!: string;
  title: string = "No title";
  price: number = 0.0;
  year: number = 0;
  designers!: string;
  minPlayers: number = 0;
  maxPlayers: number = 0;
}