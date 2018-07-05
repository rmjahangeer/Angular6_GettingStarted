import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  constructor(private heroService: HeroService, private location: Location, private route: ActivatedRoute, ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getHero(id);
  }

  getHero(id) {
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
