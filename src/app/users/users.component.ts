import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{

  input: string = ("Hello, How is it going?")
  text: string = ("Enter search details")
  isBoolean: boolean = false;
  users: string[] = ['Sulaiman', 'John', 'Peter', 'Paul', 'Jane', 'Janet']

  num1: number = 0;
  num2: number = 0;
  num3: number = 0;
  result: number = 0;

  Sum(): void {
    this.result = this.num1 + this.num2 + this.num3
  }

  Subtract(): void {
    this.result = this.num1 - this.num2 - this.num3
  }
  Multiply(): void {
    this.result = this.num1 * this.num2 * this.num3
  }
  divide(): void {
    this.result = this.num1 / this.num2 / this.num3
  }

  Average(): void {
    this.result = this.num1 + this.num2 + this.num3 / 3;
  }

  ngOnInit() {

  }
}
