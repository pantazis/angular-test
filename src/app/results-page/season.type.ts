//import { Ingredient } from '../shared/ingredient.model';
export interface Season {
    date:string;
    raceName:string;
    Results:{
              number:string;
              position:string;
              positionText:string;
              points:string;
              Driver:{
                    driverId:string;
                    url:string;
                    givenName:string;
                    familyName:string;
                    dateOfBirth:string;
                    nationality:string;
                  };
              Constructor:{
                        constructorId:string;
                        url:string;
                        name:string;
                        nationality:string;
              };
              grid:string;
              laps:string;
              status:string;
              Time:{};
    }[]; 
  
  
}

