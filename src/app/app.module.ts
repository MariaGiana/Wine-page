import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes propios
import { WinesListComponent } from './wines-list/wines-list.component';
import { MalbecnordAboutComponent } from './malbecnord-about/malbecnord-about.component';
import { MalbecnordPrincipalComponent } from './malbecnord-principal/malbecnord-principal.component';
import { MalbecnordCartComponent } from './malbecnord-cart/malbecnord-cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { FormContactComponent } from './form-contact/form-contact.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WinesListComponent,
    MalbecnordAboutComponent,
    MalbecnordPrincipalComponent,
    MalbecnordCartComponent,
    InputIntegerComponent,
    FormContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
