import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './ss3/calculator/calculator.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ColorComponent } from './ss3/color/color.component';
import { ArticleComponent } from './ss4/article/article.component';
import { LikeComponent } from './ss4/like/like.component';
import { NavbarComponent } from './ss4/navbar/navbar.component';
import { FooterComponent } from './ss4/footer/footer.component';
import { NamecardComponent } from './ss5/thuchanh/namecard/namecard.component';
import { ProgressBarComponent } from './ss5/thuchanh/progress-bar/progress-bar.component';
import { RatingBarComponent } from './ss5/baitap/rating-bar/rating-bar.component';
import { WfdaAngularCountdownTimerAppComponent } from './ss5/baitap/wfda-angular-countdown-timer-app/wfda-angular-countdown-timer-app.component';
import { AssignmentComponent } from './ss6_form/assignment/assignment.component';
import { DictionaryComponent } from './ss7_service_router/dictionary/dictionary.component';
import { DictionaryDetailComponent } from './ss7_service_router/dictionary/dictionary-detail/dictionary-detail.component';
import { DictionaryPageComponent } from './ss7_service_router/dictionary/dictionary-page/dictionary-page.component';
import { DictionaryRoutingComponent } from './ss7_service_router/dictionary/dictionary-routing/dictionary-routing.component';
import { ProductManagementComponent } from './ss7_service_router/product-management/product-management.component';
import { ProductCreateComponent } from './ss7_service_router/product-management/product-create/product-create.component';
import { ProductListComponent } from './ss7_service_router/product-management/product-list/product-list.component';
import { ProductEditComponent } from './ss7_service_router/product-management/product-edit/product-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ColorComponent,
    ArticleComponent,
    LikeComponent,
    NavbarComponent,
    FooterComponent,
    NamecardComponent,
    ProgressBarComponent,
    RatingBarComponent,
    WfdaAngularCountdownTimerAppComponent,
    AssignmentComponent,
    DictionaryComponent,
    DictionaryDetailComponent,
    DictionaryPageComponent,
    DictionaryRoutingComponent,
    ProductManagementComponent,
    ProductCreateComponent,
    ProductListComponent,
    ProductEditComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
