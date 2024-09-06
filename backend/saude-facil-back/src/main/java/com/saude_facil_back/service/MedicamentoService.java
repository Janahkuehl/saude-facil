package com.saude_facil_back.service;

import com.saude_facil_back.model.Medicamento;
import com.saude_facil_back.repository.MedicamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicamentoService {

    @Autowired
    MedicamentoRepository medicamentoRepository;

    public List<Medicamento> findAll() {
        return medicamentoRepository.findAll();
    }

    public Medicamento findById(Integer id) {
        return medicamentoRepository.findById(id).orElse(null);
    }

    public Medicamento save(Medicamento Medicamento) {
        return medicamentoRepository.save(Medicamento);
    }

    public void delete(Medicamento Medicamento) {
        medicamentoRepository.delete(Medicamento);
    }

}
