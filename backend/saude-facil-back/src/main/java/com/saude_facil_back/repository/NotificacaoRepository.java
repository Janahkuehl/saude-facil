package com.saude_facil_back.repository;

import com.saude_facil_back.model.Notificacao;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotificacaoRepository extends JpaRepository<Notificacao, Integer> {
}
