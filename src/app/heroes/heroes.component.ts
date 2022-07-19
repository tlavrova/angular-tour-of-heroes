import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-heroes',
  styleUrls: ['./heroes.component.css'],
  template: `
    <h2>My Heroes</h2>
    <div>
      <label for="new-hero">Hero name: </label>
      <input id="new-hero" #heroName />

      <!-- (click) passes input value to add() and then clears the input -->
      <button class="add-button" (click)="add(heroName.value); heroName.value=''">
        Add hero
      </button>
    </div>
    <ul class="heroes">
      <li *ngFor="let hero of heroes">
        <a routerLink="/detail/{{hero.id}}">
          <span class="badge">{{hero.id}}</span>
          {{hero.name}}
        </a>
      </li>
    </ul>
  `
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = []

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
}
