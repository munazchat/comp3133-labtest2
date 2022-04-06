import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { Component } from '@angular/core';
const routes: Routes = [
  {path: '', redirectTo: '/mission-list', pathMatch: 'full'},
  {path: 'mission-list', component: MissionlistComponent},
  {path: 'mission-details/:id', component: MissiondetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
