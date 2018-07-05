import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  title = 'Heroes List';
  selectedHero: Hero;
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) {
  }

  onHeroSelect(hero: Hero) {
    console.log(hero);
    this.selectedHero = hero;
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


