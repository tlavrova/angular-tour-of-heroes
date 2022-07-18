import { Component, OnInit } from '@angular/core';
import {HEROES} from "../mock-heroes";
import {Hero} from "../hero";

@Component({
  selector: 'app-heroes',
  styleUrls: ['./heroes.component.css'],
  template: `
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes">
        <button type="button" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
          <span class="badge">{{hero.id}}</span>
          <span class="name">{{hero.name}}</span>
        </button>
      </li>
    </ul>
    <app-hero-detail [hero]="selectedHero"></app-hero-detail>
  `
})
export class HeroesComponent implements OnInit {

  heroes = HEROES
  selectedHero?: Hero

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero
  }
}
