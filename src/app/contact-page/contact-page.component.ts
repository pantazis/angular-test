import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import {ContactFormService} from "../contact-form.service"

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit { 

  constructor(private ContactFormService:ContactFormService ) { }
  mailSend:boolean = false;
  database:string = this.ContactFormService.database;
  driversArr: string[]=[
    "Max Verstappen. Team: Red Bull Racing.",
    "Daniel Ricciardo. Team: McLaren. ",
    "Lando Norris. Team: McLaren. ...",
    "Sebastian Vettel. Team: Aston Martin Racing. ",
    "Nicholas Latifi. Team: Williams.",
    "Pierre Gasly. Team: AlphaTauri.",
    "Sergio Perez. Team: Red Bull Racing.",
    "Fernando Alonso. Team: Alpine.",
  ];
  

  form = new FormGroup({
    mail:new FormControl("",[Validators.required,Validators.email]),
    subject:new FormControl("",[Validators.required]),
    message:new FormControl("",[Validators.required]),
    driversName:new FormControl("",[Validators.required])


  });

  get mail(){
    return this.form.get('mail');
  }
  get subject(){
    return this.form.get('subject');
  }
  get message(){
    return this.form.get('message');
  }
  get driversName(){
    return this.form.get('driversName');
  }

  sendForm(){
    
    this.ContactFormService.CreatePost(this.form.value).subscribe(
      (data)=>{      
      this.mailSend = true;
    },(err) =>{
      this.mailSend = true;
    

    }
    );
  }


  ngOnInit(): void {
  }

}
