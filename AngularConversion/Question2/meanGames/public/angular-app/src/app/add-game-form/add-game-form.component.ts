import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-add-game-form',
  templateUrl: './add-game-form.component.html',
  styleUrls: ['./add-game-form.component.css']
})
export class AddGameFormComponent implements OnInit {

  addForm = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(''),
    year: new FormControl(''),
    rate: new FormControl(''),
    minAge: new FormControl(''),
    minPlayers: new FormControl(''),
    maxPlayers: new FormControl('')
  });

  constructor(private gamesDataService: GamesDataService) { }

  ngOnInit(): void {
  }
  addGame(): void {
    console.log(this.addForm.value);
    this.gamesDataService.addGame(this.addForm.value).then(() => console.log("Game saved"));


  }
}
