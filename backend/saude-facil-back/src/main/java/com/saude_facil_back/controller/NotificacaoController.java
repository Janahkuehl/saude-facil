package com.saude_facil_back.controller;

import com.saude_facil_back.model.Notificacao;
import com.saude_facil_back.service.NotificacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/notificacao")
public class NotificacaoController {

    @Autowired
    NotificacaoService notificacaoService;

    @GetMapping
    public ResponseEntity<List<Notificacao>> findAll() {
        return ResponseEntity.ok(notificacaoService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Notificacao> findById(@PathVariable Integer id) {
        return ResponseEntity.ok(notificacaoService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Notificacao> create(@RequestBody Notificacao notificacao) {
        return ResponseEntity.ok(notificacaoService.save(notificacao));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Notificacao> update(@RequestBody Notificacao notificacao) {
        return ResponseEntity.ok(notificacaoService.save(notificacao));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Notificacao> delete(@PathVariable Integer id) {
        Notificacao notificacao = notificacaoService.findById(id);
        notificacaoService.delete(notificacao);
        return ResponseEntity.ok(notificacao);
    }
}