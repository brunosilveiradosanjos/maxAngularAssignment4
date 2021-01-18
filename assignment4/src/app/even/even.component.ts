import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  // It receives a oddNumber as number from oddNumbers iteration
  @Input() number: number;

  constructor() { }

  ngOnInit() {
  }

}
