package com.saude_facil_back.service;

import com.saude_facil_back.model.Consulta;
import com.saude_facil_back.repository.ConsultaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConsultaService {
    @Autowired
    ConsultaRepository consultaRepository;

    public List<Consulta> findAll() {
        return consultaRepository.findAll();
    }

    public Consulta findById(Integer id) {
        return consultaRepository.findById(id).orElse(null);
    }

    public Consulta save(Consulta Consulta) {
        return consultaRepository.save(Consulta);
    }

    public void delete(Consulta Consulta) {
        consultaRepository.delete(Consulta);
    }

    public List<Consulta> obterConsultasHoje() {
        return consultaRepository.obterConsultasHoje();
    }
}

