import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationComponent } from './animation/animation.component';
import { BoxModelComponent } from './box-model/box-model.component';
import { GridAreasComponent } from './grid-areas/grid-areas.component';
import { GridComponent } from './grid/grid.component';
import { HomeComponent } from './home/home.component';
import { SpecificityComponent } from './specificity/specificity.component';

const routes: Routes = [
  { path: 'grid-areas', component: GridAreasComponent },
  { path: 'grid', component: GridComponent },
  { path: 'animation', component: AnimationComponent },
  { path: 'specificity', component: SpecificityComponent },
  { path: 'box-model', component: BoxModelComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
