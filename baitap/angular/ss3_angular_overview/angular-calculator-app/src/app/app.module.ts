import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './ss3/calculator/calculator.component';
import {FormsModule} from "@angular/forms";
import { ColorComponent } from './ss3/color/color.component';
import { ArticleComponent } from './ss4/article/article.component';
import { LikeComponent } from './ss4/like/like.component';
import { NavbarComponent } from './ss4/navbar/navbar.component';
import { FooterComponent } from './ss4/footer/footer.component';
import { NamecardComponent } from './ss5/thuchanh/namecard/namecard.component';
import { ProgressBarComponent } from './ss5/thuchanh/progress-bar/progress-bar.component';
import { RatingBarComponent } from './ss5/baitap/rating-bar/rating-bar.component';
import { WfdaAngularCountdownTimerAppComponent } from './ss5/baitap/wfda-angular-countdown-timer-app/wfda-angular-countdown-timer-app.component';

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
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
