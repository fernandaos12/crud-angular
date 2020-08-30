import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//componentes
import { AppComponent } from './app.component';
import { EditClienteComponent } from './edit-cliente/edit-cliente.component';
import { ListClienteComponent } from './list-cliente/list-cliente.component';
import { ContentComponent } from './content/content.component';
// banco de dados
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// paginacao
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
// roteamento e serviços
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { Clientesclasse } from './services/clientesclasse';
import { DataService } from './services/data.service';
import { ClientesService } from './services/clientes.service';




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

  
  providers: [Clientesclasse, DataService, ClientesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 