import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero = new Hero();
  constructor(private heroService: HeroService, private location: Location, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // const id = +this.route.snapshot.paramMap.get('id');
    this.route.data
      .subscribe((data: { hero: Hero }) => {
        this.hero.name = data.hero.name;
        this.hero.id = data.hero.id;
      });
    // this.getHero(id);
  }

  // getHero(id) {
  //   this.heroService.getHero(id).subscribe((hero) => {
  //     this.hero = hero;
  //   });
  // }

  goBack(): void {
    this.location.back();
  }

}
