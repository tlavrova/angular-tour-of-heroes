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
    <div *ngIf="selectedHero">
      <h2>{{selectedHero.name | uppercase}} Details</h2>
      <div>id: {{selectedHero.id}}</div>
      <div>
        <label for="hero-name">Hero name: </label>
        <input id="hero-name" [(ngModel)]="selectedHero.name" placeholder="name">
      </div>
    </div>
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
