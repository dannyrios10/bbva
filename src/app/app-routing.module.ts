import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CajerosComponent } from './pages/cajeros/cajeros.component';
import { BancosComponent } from './pages/bancos/bancos.component';
import { AtmsComponent } from './pages/atms/atms.component';


const routes: Routes = [
  { path: 'home', component: AboutComponent },
  { path: 'cajeros', component: CajerosComponent },
  { path: 'bancos', component: BancosComponent },
  { path: 'atms', component:  AtmsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
