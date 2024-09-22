import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/compartilhados/menu/menu.component';
import { CabecalhoComponent } from './componentes/compartilhados/cabecalho/cabecalho.component';
import { ConsultaComponent } from './componentes/consulta/consulta.component';
import { NotificacaoComponent } from './componentes/notificacao/notificacao.component';
import { MedicamentoComponent } from './componentes/medicamento/medicamento.component';
import { ResponsavelComponent } from './componentes/responsavel/responsavel.component';
import { ConsultaFormularioComponent } from './componentes/consulta/consulta-formulario/consulta-formulario.component';
import { ConsultaHistoricoComponent } from './componentes/consulta/consulta-historico/consulta-historico.component';
import { ConsultaLembreteComponent } from './componentes/consulta/consulta-lembrete/consulta-lembrete.component';
import { ConsultaHojeComponent } from './componentes/consulta/consulta-hoje/consulta-hoje.component';
import { MedicamentoFormularioComponent } from './componentes/medicamento/medicamento-formulario/medicamento-formulario.component';
import { MedicamentoAlarmeComponent } from './componentes/medicamento/medicamento-alarme/medicamento-alarme.component';
import { MedicamentoHistoricoComponent } from './componentes/medicamento/medicamento-historico/medicamento-historico.component';
import { MedicamentoImagemComponent } from './componentes/medicamento/medicamento-imagem/medicamento-imagem.component';
import { ResponsavelFormularioComponent } from './componentes/responsavel/responsavel-formulario/responsavel-formulario.component';
import { UsuarioLoginComponent } from './componentes/usuario/usuario-login/usuario-login.component';
import { UsuarioFormularioComponent } from './componentes/usuario/usuario-formulario/usuario-formulario.component';
import { UsuarioFotoComponent } from './componentes/usuario/usuario-foto/usuario-foto.component';
import { ConsultaAgendadosComponent } from './componentes/consulta/consulta-agendados/consulta-agendados.component';
import { NotificacaoMedicamentoComponent } from './componentes/notificacao/notificacao-medicamento/notificacao-medicamento.component';
import { ConsultaImagemComponent } from './componentes/consulta/consulta-imagem/consulta-imagem.component';
import { MedicamentoHojeComponent } from './componentes/medicamento/medicamento-hoje/medicamento-hoje.component';
import { NotificacaoConsultaComponent } from './componentes/notificacao/notificacao-consulta/notificacao-consulta.component';
import { NotificacaoImagemComponent } from './componentes/notificacao/notificacao-imagem/notificacao-imagem.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CabecalhoComponent,
    ConsultaComponent,
    NotificacaoComponent,
    MedicamentoComponent,
    ResponsavelComponent,
    ConsultaFormularioComponent,
    ConsultaHistoricoComponent,
    ConsultaLembreteComponent,
    ConsultaHojeComponent,
    MedicamentoFormularioComponent,
    MedicamentoAlarmeComponent,
    MedicamentoHistoricoComponent,
    MedicamentoImagemComponent,
    ResponsavelFormularioComponent,
    UsuarioLoginComponent,
    UsuarioFormularioComponent,
    UsuarioFotoComponent,
    ConsultaAgendadosComponent,
    NotificacaoMedicamentoComponent,
    ConsultaImagemComponent,
    MedicamentoHojeComponent,
    NotificacaoConsultaComponent,
    NotificacaoImagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
