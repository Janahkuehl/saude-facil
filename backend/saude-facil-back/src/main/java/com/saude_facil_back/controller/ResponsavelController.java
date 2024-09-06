package com.saude_facil_back.controller;

import com.saude_facil_back.model.Responsavel;
import com.saude_facil_back.service.ConsultaService;
import com.saude_facil_back.service.ResponsavelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/responsavel")
public class ResponsavelController {

    @Autowired
    ResponsavelService responsavelService;

    @GetMapping
    public ResponseEntity<List<Responsavel>> findAll() {
        return ResponseEntity.ok(responsavelService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Responsavel> findById(@PathVariable Integer id) {
        return ResponseEntity.ok(responsavelService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Responsavel> create(@RequestBody Responsavel responsavel) {
        return ResponseEntity.ok(responsavelService.save(responsavel));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Responsavel> update(@RequestBody Responsavel responsavel) {
        return ResponseEntity.ok(responsavelService.save(responsavel));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Responsavel> delete(@PathVariable Integer id) {
        Responsavel responsavel = responsavelService.findById(id);
        responsavelService.delete(responsavel);
        return ResponseEntity.ok(responsavel);
    }
}
