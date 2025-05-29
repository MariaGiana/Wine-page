import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//importar mis componentes
import { WinesListComponent } from './wines-list/wines-list.component';

import { FormsModule } from '@angular/forms';
import { MalbecnordAboutComponent } from './malbecnord-about/malbecnord-about.component';
import { MalbecnordPrincipalComponent } from './malbecnord-principal/malbecnord-principal.component';
import { MalbecnordCartComponent } from './malbecnord-cart/malbecnord-cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';//para que reconozca el input

@NgModule({
  declarations: [
    AppComponent,
    WinesListComponent,
    MalbecnordAboutComponent,
    MalbecnordPrincipalComponent,
    MalbecnordCartComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
