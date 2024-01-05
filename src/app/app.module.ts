import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { TelevisionComponent } from './products/television/television.component';
import { WashingMachineComponent } from './products/washing-machine/washing-machine.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ExerciseParentComponent } from './exercise-parent/exercise-parent.component';
import { ExerciseChildComponent } from './exercise-child/exercise-child.component';
import { CardComponent } from './card/card.component';
import { Card2Component } from './card2/card2.component';
import { DesignutilityService } from './services/designutility.service';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    LoginComponent,
    PageNotFoundComponent,
    MobileComponent,
    TelevisionComponent,
    WashingMachineComponent,
    LaptopComponent,
    NgForComponent,
    ParentComponent,
    ChildComponent,
    ExerciseParentComponent,
    ExerciseChildComponent,
    CardComponent,
    Card2Component,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DesignutilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
