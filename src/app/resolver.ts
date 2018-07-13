import { Injectable } from '@angular/core';
import {
    Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Hero } from './heroes/hero';
import { HeroService } from './hero.service';

@Injectable()
export class HeroDetailResolver implements Resolve<Hero> {
    constructor(private cs: HeroService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Hero> {
        const id = +route.paramMap.get('id');

        return this.cs.getHeroFromApi(id).pipe(
            take(1),
            map(data => {
                if (data) {
                    return data;
                } else { // id not found
                    this.router.navigate(['/hero-detail/']);
                    return null;
                }
            })
        );
    }
}
