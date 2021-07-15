import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PaintingsListComponent } from './paintings-list/paintings-list.component';
import { AddPaintingFormComponent } from './add-painting-form/add-painting-form.component';
import { DisplayPaintingComponent } from './display-painting/display-painting.component';
import { PaintingDataService } from './paintings-data.service';
import { RegisterComponent } from './register/register.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PaintingsListComponent,
    AddPaintingFormComponent,
    DisplayPaintingComponent,
    RegisterComponent,
    ErrorComponentComponent,
    ProfileComponent
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
      path: "paintings",
      component: PaintingsListComponent
    },
    {
      path: "paintings/:paintingId",
      component: DisplayPaintingComponent
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
  providers: [PaintingDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
