import { Input, NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./main/products/products.component";
import { CheckoutComponent } from "./main/checkout/checkout.component";
import { ProductDetailComponent } from "./main/product-detail/product-detail.component";
import { AccountManagerComponent } from "./main/account-manager/account-manager.component";
import { SuccessComponent } from "./main/success/success.component";

const routes: Routes = [
    {
        path: '', component:ProductsComponent
    },
    { 
        path: 'products/:select', component: ProductsComponent
    },
    {
        path: 'checkout', component: CheckoutComponent
    },
    {
        path: 'product-detail/:productId',component:ProductDetailComponent
    },
    {
        path: 'account-manager',component:AccountManagerComponent
    },
    {
        path: 'success',component:SuccessComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

