import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {IonicRatingModule} from 'ionic4-rating/dist';
import {FeedbackContentComponent} from '../feedback-content/feedback-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    IonicRatingModule, // Put ionic-rating module here
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, FeedbackContentComponent]
})
export class HomePageModule {}
