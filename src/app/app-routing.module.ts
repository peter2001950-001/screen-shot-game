import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomePageComponent } from './app-home-page/app-home-page.component';
import { AppGamePlayComponent } from './app-game-play/app-game-play.component';
import { AppPolekaPageComponent } from './app-poleka-page/app-poleka-page.component';
import { AppOliaSePageComponent } from './app-olia-se-page/app-olia-se-page.component';
import { AppSuperSiPageComponent } from './app-super-si-page/app-super-si-page.component';

const routes: Routes = [
  {
    path: "",
    component: AppHomePageComponent
  },
  {
    path: "game",
    component: AppGamePlayComponent
  },
  {
    path: "poleka",
    component: AppPolekaPageComponent
  },
  {
    path: "olia-se",
    component: AppOliaSePageComponent
  },
  {
    path: "super-si",
    component: AppSuperSiPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
