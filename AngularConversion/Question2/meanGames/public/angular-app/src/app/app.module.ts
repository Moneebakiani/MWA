import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesDataService } from './games-data.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { GameListComponent } from './game-list/game-list.component';
import { GamePageComponent } from './game-page/game-page.component';
import { AddGameFormComponent } from './add-game-form/add-game-form.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponentComponent } from './error-component/error-component.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    GameListComponent,
    GamePageComponent,
    AddGameFormComponent,
    RegisterComponent,
    ProfileComponent,
    ErrorComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{
      path: "",
      component: WelcomeComponent
    },
    {
      path: "games",
      component: GameListComponent
    },
    {
      path: "game/:gameId",
      component: GamePageComponent
    },
    {
      path: "register",
      component: RegisterComponent
    }, {
      path: "profile",
      component: ProfileComponent
    },
    {
      path: "**",
      component: ErrorComponentComponent
    }

    ])
  ],
  providers: [GamesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
