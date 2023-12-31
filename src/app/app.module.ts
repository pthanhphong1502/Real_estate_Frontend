import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './main/products/products.component';
import { CheckoutComponent } from './main/checkout/checkout.component';
import { AppRoutingModule } from './app.routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductDetailComponent } from './main/product-detail/product-detail.component';
import { SuccessPopupComponent } from './main/success-popup/success-popup.component';
import { AccountManagerComponent } from './main/account-manager/account-manager.component';
import { SuccessComponent } from './main/success/success.component';
import { ManagePostedComponent } from './main/manage-posted/manage-posted.component';
import { PostItemComponent } from './main/manage-posted/post-item/post-item.component';
import { PostInformationComponent } from './main/post-information/post-information.component';
import { PopupComponent } from './main/manage-posted/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CheckoutComponent,
    ProductDetailComponent,
    SuccessPopupComponent,
    AccountManagerComponent,
    SuccessComponent,
    ManagePostedComponent,
    PostItemComponent,
    PostInformationComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
