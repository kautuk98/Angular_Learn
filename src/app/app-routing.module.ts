import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { TelevisionComponent } from './products/television/television.component';
import { WashingMachineComponent } from './products/washing-machine/washing-machine.component';
import { ParentComponent } from './parent/parent.component';
import { ExerciseParentComponent } from './exercise-parent/exercise-parent.component';


const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:"full"},
  {path: 'home', component: HomeComponent},
  {path: 'buy-products', component: ParentComponent},
  {path: 'exercise', component: ExerciseParentComponent},
  {path: 'products', children: [
    {path:'', component: ProductsComponent},
    {path:'laptop', component: LaptopComponent},
    {path:'mobile', component: MobileComponent},
    {path:'television', component: TelevisionComponent},
    {path:'washing-machine', component: WashingMachineComponent}
  ]},
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
