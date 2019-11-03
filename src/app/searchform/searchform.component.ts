import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {

  SearchName: string;
  @Output() searchOutput = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  search(){
    this.searchOutput.emit(this.SearchName);
    this.SearchName = '';
  }

}
