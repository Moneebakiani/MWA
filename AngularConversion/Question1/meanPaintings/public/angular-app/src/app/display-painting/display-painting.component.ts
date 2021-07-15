import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Painting } from '../paintings-list/paintings-list.component';
import { PaintingDataService } from '../paintings-data.service';

@Component({
  selector: 'app-display-painting',
  templateUrl: './display-painting.component.html',
  styleUrls: ['./display-painting.component.css']
})
export class DisplayPaintingComponent implements OnInit {
  painting: Painting = {} as Painting;

  constructor(private paintingdataservice: PaintingDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const paintingId: string = this.route.snapshot.params.paintingId;
    this.getPainting(paintingId);
  }
  private getPainting(paintingId: string): void {
    this.paintingdataservice.getPainting(paintingId)
      .then((response) => this.recivedPainting(response))
      .catch(this.handleError);
  }
  public deletePainting(): void {
    const paintingId: string = this.route.snapshot.params.paintingId;
    this.paintingdataservice.deletePainting(paintingId)
      .then((response) => this.recivedPainting(response))
      .catch(this.handleError);
    this.router.navigateByUrl("/paintings");
  }
  private recivedPainting(painting: Painting) {
    this.painting = painting;
  }
  private handleError(err: any) {
    console.log("Error:", err);

  }

}
