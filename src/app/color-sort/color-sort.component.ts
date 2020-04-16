import { Component, OnInit } from '@angular/core';

//add imports - allows to read data from service to component
import { Color } from './color';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-color-sort',
  templateUrl: './color-sort.component.html',
  styleUrls: ['./color-sort.component.css']
})
export class ColorSortComponent implements OnInit {


  //grab all of the colors
  colors: Color [] = [];

  //define new variables
  color: Color;
  id: Number;


    constructor(
      private colorService: ColorService
    ) { }

    ngOnInit() {
      //store the data into the array created above
      this.colorService.getColors().subscribe(data => this.colors = data);
    }

  onChange(event) {
    console.log(event.srcElement.value);
    this.id = event.srcElement.value;
    this.colorService.getColor(this.id).subscribe(data => this.color = data);
  }



}
