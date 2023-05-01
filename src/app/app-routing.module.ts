import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPersonsComponent } from './components/view-persons/view-persons.component';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { UpdatePersonComponent } from './components/update-person/update-person.component';

const routes: Routes = [
  {path: '', component:ViewPersonsComponent},
  {path: 'add', component:AddPersonComponent},
  {path: 'update/:id', component:UpdatePersonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
