import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BoardComponent } from './components/board/board.component';
import { CardComponent } from './components/card/card.component';
import { BoardMakerComponent } from './pages/board-maker/board-maker.component';
import {FormsModule} from '@angular/forms';
import { BoardViewerComponent } from './pages/board-viewer/board-viewer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CardComponent,
    BoardMakerComponent,
    BoardViewerComponent,
    PageNotFoundComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
