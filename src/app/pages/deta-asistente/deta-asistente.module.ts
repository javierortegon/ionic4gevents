import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetaAsistentePage } from './deta-asistente.page';

const routes: Routes = [
  {
    path: '',
    component: DetaAsistentePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetaAsistentePage]
})
export class DetaAsistentePageModule {}
