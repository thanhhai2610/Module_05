import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  ans: string = 'red';
  son: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeColor(s: string) {
    this.ans = s;
  }

  changeSon() {
    this.son = "SƠN THIỂU NĂNG"
  }

}
