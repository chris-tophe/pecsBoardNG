import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BoardMakerComponent} from './pages/board-maker/board-maker.component';
import {BoardViewerComponent} from './pages/board-viewer/board-viewer.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'boardmaker', component: BoardMakerComponent},
  {path: 'boardviewer', component: BoardViewerComponent},
  {path: '',   redirectTo: '/boardviewer', pathMatch: 'full' },
  {path: '**' , component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
