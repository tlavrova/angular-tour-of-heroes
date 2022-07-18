import { Component, OnInit } from '@angular/core';
import {HEROES} from "../mock-heroes";

@Component({
  selector: 'app-heroes',
  styleUrls: ['./heroes.component.css'],
  template: `
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes">
        <button type="button">
          <span class="badge">{{hero.id}}</span>
          <span class="name">{{hero.name}}</span>
        </button>
      </li>
    </ul>
  `
})
export class HeroesComponent implements OnInit {

  heroes = HEROES

  constructor() { }

  ngOnInit(): void {
  }

}
