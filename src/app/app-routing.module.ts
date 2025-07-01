import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MalbecnordPrincipalComponent} from './malbecnord-principal/malbecnord-principal.component';
import { MalbecnordAboutComponent} from './malbecnord-about/malbecnord-about.component';
import { FormContactComponent} from './form-contact/form-contact.component';


const routes: Routes = [
 { 
  path: '',
  redirectTo: 'wines',
  pathMatch: 'full' 
},
 { 
  path: 'wines', 
  component: MalbecnordPrincipalComponent 
},
 { 
  path: 'about',
   component: MalbecnordAboutComponent
   },
   { 
    path: 'contact',
     component: FormContactComponent
     },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
