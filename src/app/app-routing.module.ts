import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './routes';
import { HeroDetailResolver } from './resolver';

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true })], // <-- debugging purposes only
  exports: [RouterModule],
  providers: [HeroDetailResolver]
})
export class AppRoutingModule { }
