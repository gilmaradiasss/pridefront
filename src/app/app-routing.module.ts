import { ProfessionalsComponent } from './professionals/professionals.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatientsComponent } from './patients/patients.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'profissionais',component: ProfessionalsComponent},
  {path: 'fale-com-a-gente',component: ContactComponent},
  {path: 'pacientes',component: PatientsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
