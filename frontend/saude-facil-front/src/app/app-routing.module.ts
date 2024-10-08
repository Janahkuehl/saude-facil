import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioLoginComponent } from './componentes/usuario/usuario-login/usuario-login.component';
import { UsuarioFormularioComponent } from './componentes/usuario/usuario-formulario/usuario-formulario.component';
import { UsuarioFotoComponent } from './componentes/usuario/usuario-foto/usuario-foto.component';
import { ResponsavelComponent } from './componentes/responsavel/responsavel.component';
import { ResponsavelFormularioComponent } from './componentes/responsavel/responsavel-formulario/responsavel-formulario.component';
import { NotificacaoConsultaComponent } from './componentes/notificacao/notificacao-consulta/notificacao-consulta.component';
import { NotificacaoMedicamentoComponent } from './componentes/notificacao/notificacao-medicamento/notificacao-medicamento.component';
import { NotificacaoImagemComponent } from './componentes/notificacao/notificacao-imagem/notificacao-imagem.component';
import { MedicamentoFormularioComponent } from './componentes/medicamento/medicamento-formulario/medicamento-formulario.component';
import { MedicamentoHistoricoComponent } from './componentes/medicamento/medicamento-historico/medicamento-historico.component';
import { MedicamentoHojeComponent } from './componentes/medicamento/medicamento-hoje/medicamento-hoje.component';
import { MedicamentoComponent } from './componentes/medicamento/medicamento.component';
import { ConsultaComponent } from './componentes/consulta/consulta.component';
import { ConsultaAgendadosComponent } from './componentes/consulta/consulta-agendados/consulta-agendados.component';
import { ConsultaFormularioComponent } from './componentes/consulta/consulta-formulario/consulta-formulario.component';
import { ConsultaHistoricoComponent } from './componentes/consulta/consulta-historico/consulta-historico.component';
import { ConsultaLembreteComponent } from './componentes/consulta/consulta-lembrete/consulta-lembrete.component';
import { HojeComponent } from './componentes/compartilhados/hoje/hoje.component';
import { UsuarioAlterarSenhaComponent } from './componentes/usuario/usuario-alterar-senha/usuario-alterar-senha.component';
import { UsuarioRecuperarSenhaComponent } from './componentes/usuario/usuario-recuperar-senha/usuario-recuperar-senha.component';

const routes: Routes = [
  {path: 'login', component: UsuarioLoginComponent},
  {path: 'usuario-formulario', component: UsuarioFormularioComponent},
  {path: 'usuario-foto', component: UsuarioFotoComponent},
  {path: 'usuario-alterar-senha', component: UsuarioAlterarSenhaComponent},
  {path: 'usuario-recuperar-senha', component: UsuarioRecuperarSenhaComponent},

  {path: 'responsavel', component: ResponsavelComponent},
  {path: 'responsavel-formulario/:id', component: ResponsavelFormularioComponent},

  {path: 'notificacao-consulta', component: NotificacaoConsultaComponent},
  {path: 'notificacao-medicamento/:id', component: NotificacaoMedicamentoComponent},
  {path: 'notificacao-imagem', component: NotificacaoImagemComponent},

  {path: 'medicamento', component: MedicamentoComponent},
  {path: 'medicamento-formulario', component: MedicamentoFormularioComponent},
  {path: 'medicamento-historico', component: MedicamentoHistoricoComponent},
  {path: 'medicamento-hoje', component: MedicamentoHojeComponent},

  {path: 'consulta', component: ConsultaComponent},
  {path: 'consulta-agendados', component: ConsultaAgendadosComponent},
  {path: 'consulta-formulario', component: ConsultaFormularioComponent},
  {path: 'consulta-historico', component: ConsultaHistoricoComponent},
  {path: 'consulta-lembrete', component: ConsultaLembreteComponent},

  {path: 'hoje', component: HojeComponent},

  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
