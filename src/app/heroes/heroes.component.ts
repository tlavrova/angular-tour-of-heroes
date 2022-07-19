import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";

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

  heroes: Hero[] = []
  selectedHero?: Hero

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }
}
