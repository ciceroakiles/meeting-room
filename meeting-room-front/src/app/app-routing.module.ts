// Imports Angular
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// Componentes
import { SalaModule } from "./component/sala.module";
import { AtualizaSalaComponent } from "./component/atualiza-sala/atualiza-sala.component";
import { CriaSalaComponent } from "./component/cria-sala/cria-sala.component";
import { SalaDetailsComponent } from "./component/sala-details/sala-details.component";
import { SalaListComponent } from "./component/sala-list/sala-list.component";

const routes: Routes = [
    { path: '', redirectTo: 'sala', pathMatch: 'full' },
    { path: 'sala', component: SalaListComponent },
    { path: 'add', component: CriaSalaComponent },
    { path: 'update/:id', component: AtualizaSalaComponent },
    { path: 'details/:id', component: SalaDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), SalaModule],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
