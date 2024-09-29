package com.saude_facil_back.controller;

import com.saude_facil_back.model.Medicamento;
import com.saude_facil_back.service.MedicamentoService;
import org.apache.tika.Tika;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/medicamento")
public class MedicamentoController {

    @Autowired
    MedicamentoService medicamentoService;

    private static final Tika tika = new Tika();

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

    @GetMapping("/hoje")
    public ResponseEntity<List<Medicamento>> obterMedicamentosHoje() {
        return ResponseEntity.ok(medicamentoService.obterMedicamentosHoje());
    }

    @GetMapping("/historico")
    public ResponseEntity<List<Medicamento>> obterMedicamentosHistorico() {
        return ResponseEntity.ok(medicamentoService.obterMedicamentosHistorico());
    }

    @PostMapping("/{id}/upload")
    public ResponseEntity<String> uploadMedicamentoImagem(@PathVariable Integer id, @RequestParam("imagem") MultipartFile imagem) {
        try {
            if (!medicamentoService.uploadMedicamentoImagem(id, imagem)) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Medicamento não encontrado");
            }
            return ResponseEntity.ok("Imagem salva com sucesso!");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao salvar imagem");
        }
    }

    @GetMapping("/{id}/imagem")
    public ResponseEntity<byte[]> getImagemPerfil(@PathVariable Integer id) {
        Medicamento medicamento = medicamentoService.findById(id);
        if (medicamento == null || medicamento.getImagem() == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        String tipoImagem = getTipoImagem(medicamento.getImagem());
        if (tipoImagem == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        MediaType mediaType = MediaType.parseMediaType(tipoImagem);
        return ResponseEntity.ok().contentType(mediaType).body(medicamento.getImagem());
    }

    private String getTipoImagem(byte[] imageBytes) {
        return tika.detect(imageBytes);
    }

}