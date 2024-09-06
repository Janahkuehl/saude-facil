package com.saude_facil_back.service;

import com.saude_facil_back.model.Notificacao;
import com.saude_facil_back.repository.NotificacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificacaoService {

    @Autowired
    NotificacaoRepository notificacaoRepository;

    public List<Notificacao> findAll() {
        return notificacaoRepository.findAll();
    }

    public Notificacao findById(Integer id) {
        return notificacaoRepository.findById(id).orElse(null);
    }

    public Notificacao save(Notificacao Notificacao) {
        return notificacaoRepository.save(Notificacao);
    }

    public void delete(Notificacao Notificacao) {
        notificacaoRepository.delete(Notificacao);
    }

}
