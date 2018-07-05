import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';
import { HeroDetailResolver } from './resolver';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    // { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'heroes', component: HeroesComponent },
    {
        path: 'hero-detail/:id', component: HeroDetailComponent, resolve: {
            hero: HeroDetailResolver
        }
    },
    { path: 'dashboard', component: DashboardComponent },
    { path: '**', component: NotFoundComponent }
];
