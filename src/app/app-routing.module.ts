import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BoardMakerComponent} from './pages/board-maker/board-maker.component';


const routes: Routes = [
  {path: 'boardbuilder', component: BoardMakerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
