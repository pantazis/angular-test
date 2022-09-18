import { Component, OnInit } from '@angular/core';
import { WinnerService  } from '../../winner-service.service';
import { Season  } from './../season.type'


@Component({
  selector: 'app-driver-standings',
  templateUrl: './driver-standings.component.html',
  styleUrls: ['./driver-standings.component.scss']
})
export class DriverStandingsComponent implements OnInit {
  constructor(private WinnerService:WinnerService) { }
  showSelectYear:boolean = true;
  showLoading:boolean = false;
  date: string="";
  season:Season[] =[];
  activeYear:string = "";



  ngOnInit(): void {
    this.showSingleYear()
    
  }
  showSingleYear(){
    this.WinnerService.getdata.subscribe(()=>{
      this.showSelectYear=false;
      this.showLoading=true;

    })
    
  this.WinnerService.showdata.subscribe(season=>{   
    
    this.showLoading=false;
   
    this.season =season.StandingsLists[0].DriverStandings;
    this.activeYear = season.season
    
   
  });
}

}
