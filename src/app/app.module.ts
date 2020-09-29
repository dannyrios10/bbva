import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CajerosComponent } from './pages/cajeros/cajeros.component';
import { BancosComponent } from './pages/bancos/bancos.component';
import { AtmsComponent } from './pages/atms/atms.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    CajerosComponent,
    BancosComponent,
    AtmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
