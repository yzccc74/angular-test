import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss']
})
export class VoterComponent implements OnInit {

  @Input() // 부모로부터 받을 때
  name: String;

  @Output() // 부모한테 전송
  voted = new EventEmitter();

  didVote = false;

  vote(agree: boolean) {
    this.voted.emit(agree);
    this.didVote = true; // 클릭하면 disabled
  }

  constructor() { }

  ngOnInit(): void {
  }

}
