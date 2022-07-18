import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../hero";

@Component({
  selector: 'app-hero-detail',
  styleUrls: ['./hero-detail.component.css'],
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name | uppercase}} Details</h2>
      <div>id: {{hero.id}}</div>
      <div>
        <label for="hero-name">Hero name: </label>
        <input id="hero-name" [(ngModel)]="hero.name" placeholder="name">
      </div>
    </div>
  `
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero

  constructor() { }

  ngOnInit(): void {
  }

}
