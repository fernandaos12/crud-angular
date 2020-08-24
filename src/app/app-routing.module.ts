import { EditClienteComponent } from './edit-cliente/edit-cliente.component';
import { ListClienteComponent } from './list-cliente/list-cliente.component';
import { ContentComponent } from './content/content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path: '', component: ContentComponent},
  { path: 'list-cliente', component: ListClienteComponent },
  { path: 'edit-cliente', component: EditClienteComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
