import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { EspacoComponent } from './pages/espaco/espaco.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { EquipeComponent } from './pages/equipe/equipe.component';
import { EnderecoComponent } from './pages/endereco/endereco.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'sobre',component:SobreComponent},
    {path:'contato',component:ContatoComponent},
    {path:'espaco',component:EspacoComponent},
    {path:'servicos',component:ServicosComponent},
    {path:'equipe',component:EquipeComponent},
    {path:'endereco',component:EnderecoComponent}

];
