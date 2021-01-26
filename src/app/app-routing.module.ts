import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TablaPersonasComponent } from './components/tabla-personas/tabla-personas.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EdadGuard } from './guards/edad.guard';

const routes: Routes = [

  {path: 'personas', component: TablaPersonasComponent},
  {path: '', component: NavbarComponent},
  {path: 'inicio', component: NavbarComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'registrar/:id/:nombre/:ap/:edad/:ciu/:uni/:car', component: RegistrarComponent, canActivate: [EdadGuard]},
  {path: '**', component: PageNotFoundComponent}
  
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
