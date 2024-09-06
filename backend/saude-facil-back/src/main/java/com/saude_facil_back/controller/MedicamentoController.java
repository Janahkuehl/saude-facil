package com.saude_facil_back.controller;

import com.saude_facil_back.model.Consulta;
import com.saude_facil_back.model.Medicamento;
import com.saude_facil_back.service.MedicamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/medicamento")
public class MedicamentoController {

    @Autowired
    MedicamentoService medicamentoService;

    @GetMapping
    public ResponseEntity<List<Medicamento>> findAll() {
        return ResponseEntity.ok(medicamentoService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Medicamento> findById(@PathVariable Integer id) {
        return ResponseEntity.ok(medicamentoService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Medicamento> create(@RequestBody Medicamento medicamento) {
        return ResponseEntity.ok(medicamentoService.save(medicamento));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Medicamento> update(@RequestBody Medicamento medicamento) {
        return ResponseEntity.ok(medicamentoService.save(medicamento));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Medicamento> delete(@PathVariable Integer id) {
        Medicamento medicamento = medicamentoService.findById(id);
        medicamentoService.delete(medicamento);
        return ResponseEntity.ok(medicamento);
    }
}