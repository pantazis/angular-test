import { Component, OnInit } from '@angular/core';
import { ResultServiceService  } from '../../result-service.service';
import { Season  } from './../season.type'

@Component({
  selector: 'app-circuit-information',
  templateUrl: './circuit-information.component.html',
  styleUrls: ['./circuit-information.component.scss']
})
export class CircuitInformationComponent implements OnInit {

  constructor(private ResultServiceService:ResultServiceService) { }
  showSelectYear:boolean = true;
  showLoading:boolean = false;
  date: string="";
  season:Season[] =[];



  ngOnInit(): void {
    this.showSingleYear()
    
  }
  showSingleYear(){
    this.ResultServiceService.getdata.subscribe(()=>{
      this.showSelectYear=false;
      this.showLoading=true;

    })
    
  this.ResultServiceService.showdata.subscribe(season=>{
    
    this.showLoading=false;
    this.season =season;
    
   
  });
}

}
