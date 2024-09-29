package com.saude_facil_back.service;

import com.saude_facil_back.model.Medicamento;
import com.saude_facil_back.repository.MedicamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

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

    public List<Medicamento> obterMedicamentosHoje() {
        return medicamentoRepository.obterMedicamentosHoje();
    }

    public List<Medicamento> obterMedicamentosHistorico() {
        return medicamentoRepository.obterMedicamentosHistorico();
    }

    public boolean uploadMedicamentoImagem(Integer id, MultipartFile imagem) throws IOException {
        Optional<Medicamento> medicamentoOptional = medicamentoRepository.findById(id);
        if (medicamentoOptional.isEmpty()) {
            return false;
        }

        Medicamento medicamento = medicamentoOptional.get();
        medicamento.setImagem(imagem.getBytes());
        medicamentoRepository.save(medicamento);
        return true;
    }

}
