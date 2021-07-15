import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Game } from '../game-list/game-list.component';
import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  game: Game = {} as Game;


  constructor(private gamesDataService: GamesDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const gameId: string = this.route.snapshot.params.gameId;
    this.getGame(gameId);
    // this.deleteGame();

  }

  private getGame(gameId: string): void {
    this.gamesDataService.getGame(gameId)
      .then((response) => this.recivedGame(response))
      .catch(this.handleError);
  }
  public deleteGame(): void {
    const gameId: string = this.route.snapshot.params.gameId;
    this.gamesDataService.deleteGame(gameId)
      .then((response) => this.recivedGame(response))
      .catch(this.handleError);
    this.router.navigateByUrl("/games");
  }
  private recivedGame(game: Game) {
    this.game = game;
  }
  private handleError(err: any) {
    console.log("Error:", err);

  }
}
