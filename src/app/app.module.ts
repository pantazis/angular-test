import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { WinnerPageComponent } from './winner-page/winner-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CircuitInformationComponent } from './results-page/circuit-information/circuit-information.component';
import { DriverStandingsComponent } from './winner-page/driver-standings/driver-standings.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ResultsPageComponent,
    WinnerPageComponent,
    ContactPageComponent,
    CircuitInformationComponent,
    DriverStandingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
