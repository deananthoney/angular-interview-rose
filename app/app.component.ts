import { Component, ContentChildren, Directive, Input, QueryList, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input( ['index.html'] )

constructor() { }
 
  ngOnInit() {

  }

  //Make your changes here
  // API url example: https://openlibrary.org/search.json?q=the+lord+of+the+rings