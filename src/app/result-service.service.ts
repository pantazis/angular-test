import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResultServiceService {  
  seasons:[] =[];
  sesionData:string[] =[];
  singleSeason:[]=[];
  yearSelected:string="";
  showdata: EventEmitter<any> = new EventEmitter();
  getdata: EventEmitter<any> = new EventEmitter();
  

  constructor(private http: HttpClient) { }



  



  GetAvailableYears(){
    return this.http.get("http://ergast.com/api/f1/seasons.json?limit=200&offset=0")
    .pipe(map((data:any) =>{
      this.seasons = data["MRData"].SeasonTable.Seasons
      this.seasons.forEach((year:any)=>{        
        this.sesionData.push(year.season);

      });
      return  this.sesionData.reverse();
    }))
  }

  GetgetSingleYearData(){
    this.getdata.emit();
    return this.http.get(`http://ergast.com/api/f1/${this.yearSelected}/results.json?limit=400&offset=0`)
    .pipe(map((data:any) =>{
      this.singleSeason = data["MRData"].RaceTable.Races;
      this.showdata.emit(this.singleSeason);      
      return  this.singleSeason;
    }))
    
  }
}
