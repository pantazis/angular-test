import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  showNavMobile: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMobile(){
    this.showNavMobile = !this.showNavMobile;

  }

}
