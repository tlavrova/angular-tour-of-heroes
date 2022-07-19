import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../hero.service";
import {Location} from "@angular/common";

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
      <button type="button" (click)="goBack()">go back</button>
    </div>
  `
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero()
  }

  getHero() {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.heroService.getHero(id).subscribe(hero => this.hero = hero)
  }

  goBack() {
    this.location.back()
  }
}
