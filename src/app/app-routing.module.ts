import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MalbecnordPrincipalComponent} from './malbecnord-principal/malbecnord-principal.component';
import { MalbecnordAboutComponent} from './malbecnord-about/malbecnord-about.component';


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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
