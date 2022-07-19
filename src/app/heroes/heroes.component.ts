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
}
