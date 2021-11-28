import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-game',
  templateUrl: './second-game.component.html',
  styleUrls: ['./second-game.component.scss']
})
export class SecondGameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('second app');
  }

}
