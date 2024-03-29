import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewquotePageRoutingModule } from './newquote-routing.module';

import { NewquotePage } from './newquote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NewquotePageRoutingModule
  ],
  declarations: [NewquotePage]
})
export class NewquotePageModule {}
