import { Component, OnInit } from '@angular/core';

import { PaintingDataService } from '../paintings-data.service';

@Component({
  selector: 'app-paintings-list',
  templateUrl: './paintings-list.component.html',
  styleUrls: ['./paintings-list.component.css']
})
export class PaintingsListComponent implements OnInit {


  paintings: Painting[] = [];

  constructor(private paintingdataservice: PaintingDataService) { }

  ngOnInit(): void {
    this.getPaintings();
  }
  public getPaintings(): void {
    this.paintingdataservice.getPaintings().then(foundPaintings => this.paintings = foundPaintings);
  }


}
export class Painting {
  _id!: string;
  name: string = "No name";
  createdYear!: number;
  artist!: string;

}
