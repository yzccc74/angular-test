import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-votetaker',
  templateUrl: './votetaker.component.html',
  styleUrls: ['./votetaker.component.scss']
})
export class VotetakerComponent implements OnInit {

  agreed = 0;
  disagreed = 0;
  voters = ['Mr.Hong', 'Miss.Kim', 'Mr.Lee'];

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
