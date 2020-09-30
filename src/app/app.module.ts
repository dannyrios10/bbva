import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AgmCoreModule } from '@agm/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CajerosComponent } from './pages/cajeros/cajeros.component';
import { BancosComponent } from './pages/bancos/bancos.component';
import { AtmsComponent } from './pages/atms/atms.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { HttpClientModule } from '@angular/common/http';

// Extras



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    CajerosComponent,
    BancosComponent,
    AtmsComponent,
    MapaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCi3E7IjSK_Z5r6Cb9CSc0NasG2rMx-Pj4'
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
