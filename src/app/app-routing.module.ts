import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxModelComponent } from './box-model/box-model.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'box-model', component: BoxModelComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
