import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const CONTACTS_ROUTES: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forChild(CONTACTS_ROUTES)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
