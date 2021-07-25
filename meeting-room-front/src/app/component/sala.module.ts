// Imports Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Componentes
import { AtualizaSalaComponent } from './atualiza-sala/atualiza-sala.component';
import { CriaSalaComponent } from './cria-sala/cria-sala.component';
import { SalaDetailsComponent } from './sala-details/sala-details.component';
import { SalaListComponent } from './sala-list/sala-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AtualizaSalaComponent,
    CriaSalaComponent,
    SalaDetailsComponent,
    SalaListComponent
  ]
})
export class SalaModule { }
