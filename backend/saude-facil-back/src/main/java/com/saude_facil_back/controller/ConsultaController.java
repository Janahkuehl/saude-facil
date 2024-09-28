package com.saude_facil_back.controller;

import com.saude_facil_back.model.Consulta;
import com.saude_facil_back.service.ConsultaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/consulta")
public class ConsultaController {

    @Autowired
    ConsultaService consultaService;

    @GetMapping
    public ResponseEntity<List<Consulta>> findAll() {
        return ResponseEntity.ok(consultaService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Consulta> findById(@PathVariable Integer id) {
        return ResponseEntity.ok(consultaService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Consulta> create(@RequestBody Consulta consulta) {
        return ResponseEntity.ok(consultaService.save(consulta));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Consulta> update(@RequestBody Consulta consulta) {
        return ResponseEntity.ok(consultaService.save(consulta));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Consulta> delete(@PathVariable Integer id) {
        Consulta consulta = consultaService.findById(id);
        consultaService.delete(consulta);
        return ResponseEntity.ok(consulta);
    }

    @GetMapping("/consultas-hoje")
    public ResponseEntity<List<Consulta>> obterConsultasHoje() {
        return ResponseEntity.ok(consultaService.obterConsultasHoje());
    }
}