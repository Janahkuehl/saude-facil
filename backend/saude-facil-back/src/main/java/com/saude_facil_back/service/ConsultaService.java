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
        return ConsultaRepository.findAll();
    }

    public Consulta findById(Integer id) {
        return ConsultaRepository.findById(id).orElse(null);
    }

    public Consulta save(Consulta Consulta) {
        return ConsultaRepository.save(Consulta);
    }

    public void delete(Consulta Consulta) {
        ConsultaRepository.delete(Consulta);
    }
}

