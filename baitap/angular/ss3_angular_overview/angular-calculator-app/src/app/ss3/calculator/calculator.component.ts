import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  inp1: number;

  inp2: number;

  ans  : number;


  constructor() {
  }

  ngOnInit(): void {
  }


  add() {
    this.ans = parseFloat(String(this.inp1))  + parseFloat(String(this.inp2))
  }

  apf() {
    this.ans = this.inp1 - this.inp2

  }

  core() {
    this.ans = this.inp1 * this.inp2

  }

  divide() {
    this.ans = this.inp1 / this.inp2
  }
}
