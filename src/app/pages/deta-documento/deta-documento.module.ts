import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetaDocumentoPage } from './deta-documento.page';

const routes: Routes = [
  {
    path: '',
    component: DetaDocumentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetaDocumentoPage]
})
export class DetaDocumentoPageModule {}
