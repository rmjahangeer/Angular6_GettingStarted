import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroesAsync()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  // gotoHero(hero: Hero) {
  //   this.router.navigate(['/detail'], {
  //     queryParams: {
  //       id: hero.id
  //     }
  //   });
  // }
}
