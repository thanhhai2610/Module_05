import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  faebd7: string = '#faebd7';
  c4dc54: string = '#c4dc54';
  a06225: string = '#906225';
  c3005: string = '#4c3005';
  d3d753: string = '#d3d753';
  a3961d: string = '#a3961d';
  m06006: string = '#806006';
  m584b08: string = '#584b08';
  aed7ac: string = '#aed7ac';
  d5d: string = '#738d5d';
  d31: string = '#526d31';
  a: string = '#27570a';
  b7c6: string = '#92b7c6';
  c8a92: string = '#5c8a92';
  c55568: string = '#255568';
  c83e53: string = '#083e53';
  //

  ans : string = 'red';
   son: string;

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(s: string) {
    this.ans = s;
  }

  changeSon() {
   this.son= "SƠN THIỂU NĂNG"
  }
}
