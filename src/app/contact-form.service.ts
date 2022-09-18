import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {formType} from './contact-page/formData.type'



@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  constructor(private http: HttpClient) { }
  database:string = "https://test-http-3dddf-default-rtdb.europe-west1.firebasedatabase.app/post.json";
  formDAta=new formType([],"","","");
  
    
CreatePost(formData:any){
    this.formDAta=formData;
    

    return this.http.post(this.database,formData)

  }
}
