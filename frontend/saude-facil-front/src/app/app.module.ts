import { NgModule, LOCALE_ID } from '@angular/core';
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
import { MedicamentoFormularioComponent } from './componentes/medicamento/medicamento-formulario/medicamento-formulario.component';
import { MedicamentoHistoricoComponent } from './componentes/medicamento/medicamento-historico/medicamento-historico.component';
import { ResponsavelFormularioComponent } from './componentes/responsavel/responsavel-formulario/responsavel-formulario.component';
import { UsuarioFormularioComponent } from './componentes/usuario/usuario-formulario/usuario-formulario.component';
import { UsuarioFotoComponent } from './componentes/usuario/usuario-foto/usuario-foto.component';
import { ConsultaAgendadosComponent } from './componentes/consulta/consulta-agendados/consulta-agendados.component';
import { NotificacaoMedicamentoComponent } from './componentes/notificacao/notificacao-medicamento/notificacao-medicamento.component';
import { MedicamentoHojeComponent } from './componentes/medicamento/medicamento-hoje/medicamento-hoje.component';
import { NotificacaoConsultaComponent } from './componentes/notificacao/notificacao-consulta/notificacao-consulta.component';
import { NotificacaoImagemComponent } from './componentes/notificacao/notificacao-imagem/notificacao-imagem.component';
import { HojeComponent } from './componentes/compartilhados/hoje/hoje.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioRecuperarSenhaComponent } from './componentes/usuario/usuario-recuperar-senha/usuario-recuperar-senha.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { UsuarioAlterarSenhaComponent } from './componentes/usuario/usuario-alterar-senha/usuario-alterar-senha.component';
import { UsuarioLoginComponent } from './componentes/usuario/usuario-login/usuario-login.component';

registerLocaleData(localePt);

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
    MedicamentoFormularioComponent,
    MedicamentoHistoricoComponent,
    ResponsavelFormularioComponent,
    UsuarioLoginComponent,
    UsuarioFormularioComponent,
    UsuarioFotoComponent,
    ConsultaAgendadosComponent,
    NotificacaoMedicamentoComponent,
    MedicamentoHojeComponent,
    NotificacaoConsultaComponent,
    NotificacaoImagemComponent,
    HojeComponent,
    UsuarioAlterarSenhaComponent,
    UsuarioRecuperarSenhaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
