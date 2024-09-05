package com.saude_facil_back.service;

import com.saude_facil_back.model.Notificacao;
import com.saude_facil_back.model.Responsavel;
import com.saude_facil_back.repository.NotificacaoRepository;
import com.saude_facil_back.repository.ResponsavelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResponsavelService {

    @Autowired
    ResponsavelRepository responsavelRepository;

    public List<Responsavel> findAll() {
        return ResponsavelRepository.findAll();
    }

    public Responsavel findById(Integer id) {
        return ResponsavelRepository.findById(id).orElse(null);
    }

    public Responsavel save(Responsavel Responsavel) {
        return ResponsavelRepository.save(Responsavel);
    }

    public void delete(Responsavel Responsavel) {
        ResponsavelRepository.delete(Responsavel);
    }
}
