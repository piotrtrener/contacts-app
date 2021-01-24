import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'contacts'},
  {path: 'contacts', component: ContactsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
