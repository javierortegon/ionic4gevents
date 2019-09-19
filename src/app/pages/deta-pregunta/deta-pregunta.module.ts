import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetaPreguntaPage } from './deta-pregunta.page';

const routes: Routes = [
  {
    path: '',
    component: DetaPreguntaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetaPreguntaPage]
})
export class DetaPreguntaPageModule {}
