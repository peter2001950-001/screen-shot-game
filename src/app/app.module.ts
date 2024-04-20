import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppHomePageComponent } from './app-home-page/app-home-page.component';
import { AppGamePlayComponent } from './app-game-play/app-game-play.component';
import { BackgroundService } from './background.service';
import { AppPolekaPageComponent } from './app-poleka-page/app-poleka-page.component';
import { AppOliaSePageComponent } from './app-olia-se-page/app-olia-se-page.component';
import { AppSuperSiPageComponent } from './app-super-si-page/app-super-si-page.component';
import { GameEngineService } from './game-engine.service';
import { AppInfoPageComponent } from './app-info-page/app-info-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHomePageComponent,
    AppGamePlayComponent,
    AppPolekaPageComponent,
    AppOliaSePageComponent,
    AppSuperSiPageComponent,
    AppInfoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [BackgroundService, GameEngineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
