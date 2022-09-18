import { Component, OnInit,OnDestroy } from '@angular/core';
import { WinnerService } from '../winner-service.service';
import { filterData  } from './filterData'


 


@Component({
  selector: 'app-winner-page',
  templateUrl: './winner-page.component.html',
  styleUrls: ['./winner-page.component.scss']
})
export class WinnerPageComponent implements OnInit {
  openDropdown:boolean = false;
  loading:boolean = true;
  availableYears:string[]=[];
  availableYearsFiltered:string[]=[];
  singleYear:string="";
  filter=new filterData('');
  

  constructor(private WinnerService:WinnerService) { }

  ngOnInit(): void {
    this.onGetAvailableYears()
    this.filterChanged();
    
  }
  onDropdownClick(){
    this.openDropdown = !this.openDropdown;
  }


  onGetAvailableYears(){
    
    this.WinnerService.GetAvailableYears().subscribe(res => {
      
      
      
      this.availableYears= res; 
      
          
      if(this.availableYears.length > 0){
        this.loading=false;
      }
    });   
  }

  getSingleYear(yearElement:number){
    this.WinnerService.yearSelected=this.availableYearsFiltered[+yearElement]; 
    this.WinnerService.getSingleYearData().subscribe( res=>{
   
    });
    this.availableYearsFiltered=[];
    this.filter.year="";

    

  }

  filterChanged(){
    
    this.availableYearsFiltered=[];
    this.availableYearsFiltered=this.availableYears.filter(year=>{
     
      
      if(year.substring(0,this.filter.year.length).includes(this.filter.year)&&this.filter.year.length>0){
        return year;
      }
      return

    });
    

    


  }

  OnDestroy(){
  this.availableYearsFiltered=[];
  this.availableYears=[];

  }

}