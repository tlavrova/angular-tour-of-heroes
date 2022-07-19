import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.css'],
  template: `
    <h2>Top Heroes</h2>
    <div class="heroes-menu">
      <a *ngFor="let hero of heroes" routerLink="/detail/{{hero.id}}">
        {{hero.name}}
      </a>
    </div>
  `
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
