import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CatComponent } from './cat/cat.component';
import { CatSkeletonComponent } from './cat-skeleton/cat-skeleton.component';



@NgModule({
  declarations: [
    CatComponent,
    CatSkeletonComponent
  ],
  exports: [
    CatComponent,
    CatSkeletonComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
