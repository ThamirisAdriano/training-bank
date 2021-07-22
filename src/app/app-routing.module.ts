import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './/content/content.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';

 

const routes: Routes = [
  {path: '' , component: ContentComponent},
  { path: 'cadastro', component: CadastroClientesComponent }
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule { }
