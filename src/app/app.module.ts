import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsModule } from './contacts/contacts.module';
import { ContactsService } from './contacts/contacts.service';
import { HttpClientModule } from '@angular/common/http';
// import { ContactsRoutingModule } from './contacts/contacts-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ContactsRoutingModule,
    ContactsModule,
    HttpClientModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
