import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  // Every seccond an event will be emmited
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    // interval knows the interval the function should be called
    this.interval = setInterval(() => {
      this.lastNumber++;
      this.intervalFired.emit(this.lastNumber);
    }, 1000)
  }

  onPauseGame() {
    clearInterval(this.interval);
  }
}
