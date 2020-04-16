import { Component, OnInit  } from '@angular/core';

import { Brush } from "./brush";
import { BrushService } from "../brush.service";
import { log } from 'util';



@Component({
  selector: 'app-brush-sort',
  templateUrl: './brush-sort.component.html',
  styleUrls: ['./brush-sort.component.css']
})
export class BrushSortComponent implements OnInit {

  brushes:Brush[] = [];
  filteredBrushes:Brush[] = [];
  material:string;
  materials:Brush[] = [];
  error:any = {
    status:null,
    message:null
  };



  constructor(
    private brushService:BrushService
  ) { }

  ngOnInit() {
    this.brushService.getBrushes().subscribe(
    data => {
      this.brushes = data;
      this.materials = [];
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if(!this.materials.some(q=>q.material==element.material)){
          this.materials.push(element);
        }
      }      
    },
    err=>{
      this.error.status=err.status;
      this.error.message=err.error;
    }
  );
  }

  onSearchMaterial(){
    this.brushService.getBrushes(this.material).subscribe(
      data => this.brushes = data,
      err=>{
        this.error.status=err.status;
        this.error.message=err.error;
      }
    );
  }

  onSearchKeyword(keyword:string){
    
    this.filteredBrushes = this.brushes.filter(q=>
      q.id.toString().includes(keyword)
      ||q.material.includes(keyword)
      ||q.make.includes(keyword)
      ||q.shape.includes(keyword)
    );
  }
}
