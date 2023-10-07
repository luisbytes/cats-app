import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatsPageRoutingModule } from './cats-routing.module';

import { CatsPage } from './cats.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CatsPage]
})
export class CatsPageModule {}
