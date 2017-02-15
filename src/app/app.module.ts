import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//import { Page1 } from '../pages/page1/page1';
//import { Page2 } from '../pages/page2/page2';
import { MyTeamsPage, TournamentsPage, TeamsPage, TeamDetailPage, GamePage, TeamHomePage, StandingsPage } from '../pages/pages';
// import { TournamentsPage } from '../pages/pages';
// import { TeamsPage } from '../pages/pages';
// import { TeamDetailPage } from '../pages/pages';
// import { GamePage } from '../pages/pages';

@NgModule({
  declarations: [
    MyApp,
    //Page1,
    //Page2,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamDetailPage,
    GamePage,
    TeamHomePage,
    StandingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //Page1,
    //Page2
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamDetailPage,
    GamePage,
    TeamHomePage,
    StandingsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
