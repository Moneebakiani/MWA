import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { PaintingDataService } from '../paintings-data.service';

@Component({
  selector: 'app-add-painting-form',
  templateUrl: './add-painting-form.component.html',
  styleUrls: ['./add-painting-form.component.css']
})
export class AddPaintingFormComponent implements OnInit {
  addForm = new FormGroup({
    name: new FormControl(''),
    createdYear: new FormControl(''),
    artist: new FormControl(''),

  });

  constructor(private paintingdataService: PaintingDataService) { }

  ngOnInit(): void {
  }
  addPainting(): void {
    console.log(this.addForm.value);
    this.paintingdataService.addPainting(this.addForm.value).then(() => console.log("Game saved"));


  }
}
