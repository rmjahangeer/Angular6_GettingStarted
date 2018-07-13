import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../hero.service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  title = 'Heroes List';
  heroes: Hero[] = [];
  constructor(private heroService: HeroService, private router: Router) {
  }

  goToHero(hero: Hero) {
    console.log(hero);
    this.router.navigate(['/hero-detail', hero.id]);
  }

  getHeroes(): void {
    this.heroService.getHeroesAsync().subscribe((data) => {
      this.heroes = data;
    });
  }

  ngOnInit() {
    this.getHeroes();
  }

}


