
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditClienteComponent } from './edit-cliente/edit-cliente.component';
import { ListClienteComponent } from './list-cliente/list-cliente.component';
import { ContentComponent } from './content/content.component';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// paginacao
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';

import { RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    EditClienteComponent,
    ListClienteComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireModule,
    RouterModule, 
    ToastrModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    BrowserAnimationsModule, 

    NgxPaginationModule,
    ToastrModule.forRoot(),
    
  
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
