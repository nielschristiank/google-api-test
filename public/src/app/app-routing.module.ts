import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceComponent } from './place/place.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: PlaceComponent
  },
  {
    path: 'place/:id',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
