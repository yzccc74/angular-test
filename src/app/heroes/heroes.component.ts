import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  // hero = { id: 1, name: 'Windstorm'};

  hero: Hero = { id: 1, name: 'Windstorm' };

  heroes = HEROES;

  isSpecial = true;

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  onSave(event: any) { 
    console.log(event); 
  }



  constructor() { }

  ngOnInit(): void {
  }

}
