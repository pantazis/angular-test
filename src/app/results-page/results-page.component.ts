import { Component, OnInit,OnDestroy } from '@angular/core';
import { ResultServiceService  } from '../result-service.service';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss']
})
export class ResultsPageComponent implements OnInit {
  openDropdown:boolean = false;
  loading:boolean = true;
  availableYears:string[]=[];
  singleYear:string="";
  

  constructor(private ResultServiceService:ResultServiceService) { }

  ngOnInit(): void {
    this.onGetAvailableYears()
  }
  onDropdownClick(){
    this.openDropdown = !this.openDropdown;
  }


  onGetAvailableYears(){
    this.ResultServiceService.GetAvailableYears().subscribe(res => {
      this.availableYears= res;      
      if(this.availableYears.length > 0){
        this.loading=false;
      }
    });   
  }

  getSingleYear(yearElement:number){
    this.ResultServiceService.yearSelected=this.availableYears[+yearElement]; 
    this.ResultServiceService.getSingleYearData().subscribe( res=>{
   
    });
    

  }

  OnDestroy(){}

}
