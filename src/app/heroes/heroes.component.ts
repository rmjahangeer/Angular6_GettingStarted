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
    this.heroService.getHeroesFromApi().subscribe((data) => {
      this.heroes = data;
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  ngOnInit() {
    this.getHeroes();
  }

}


