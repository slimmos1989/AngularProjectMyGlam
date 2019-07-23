import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit {
  
  constructor(private dataService: DataService) {}
  
  data: any;
  ngOnInit() {
    return this.dataService.getJson().subscribe((el:any) =>{this.data= el.data;
      for (let i=0; i<this.data.length;i++){
        this.data[i].imagePath= "http://"+this.data[i].imagePath;
      };
    console.log(this.data)})

    
  }
  setClass(i: number) {
    var a ="inactive";
    if(i==0){
      a="active";
    }
    return a;
}

}
