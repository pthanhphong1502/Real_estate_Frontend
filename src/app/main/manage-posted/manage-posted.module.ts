import { ManagePostedComponent } from './manage-posted.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { Item1 } from './item/Item1';
import { Item2 } from './item/Item2';
import { NgModule } from '@angular/core';
import { PostItemComponent } from './post-item/post-item.component';
import { PopupComponent } from './popup/popup.component';

// Define routes
const appRoutes: Routes = [
  // routs from that root to the landing route
  { path: 'item-1', component: Item1 }, // tab 1
  { path: 'item-2', component: Item2 }, // tab 2
];

@NgModule({
  imports: [BrowserModule, FormsModule],
  bootstrap: [ManagePostedComponent],
})
export class ManageModule {}
