import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BoardMakerComponent} from './pages/board-maker/board-maker.component';
import {BoardViewerComponent} from './pages/board-viewer/board-viewer.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {PictoSearchComponent} from './pages/picto-search/picto-search.component';


const routes: Routes = [
  {path: 'boardmaker', component: BoardMakerComponent},
  {path: 'boardviewer', component: BoardViewerComponent},
  {path: 'pictosearch', component: PictoSearchComponent},
  {path: '',   redirectTo: '/boardviewer', pathMatch: 'full' },
  {path: '**' , component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
