package com.saude_facil_back.controller;

import com.saude_facil_back.model.Usuario;
import com.saude_facil_back.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    UsuarioService usuarioService;

    @GetMapping
    public ResponseEntity<List<Usuario>> findAll() {
        return ResponseEntity.ok(usuarioService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> findById(@PathVariable Integer id) {
        return ResponseEntity.ok(usuarioService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Usuario> create(@RequestBody Usuario usuario) {
        return ResponseEntity.ok(usuarioService.save(usuario));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Usuario> update(@RequestBody Usuario usuario) {
        return ResponseEntity.ok(usuarioService.save(usuario));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Usuario> delete(@PathVariable Integer id) {
        Usuario usuario = usuarioService.findById(id);
        usuarioService.delete(usuario);
        return ResponseEntity.ok(usuario);
    }

//    @PostMapping("/{id}/upload")
//    public ResponseEntity<String> uploadProfileImage(@PathVariable Integer id, @RequestParam("imagem") MultipartFile imagem) {
//        try {
//            if (!usuarioService.uploadProfileImage(id, imagem)) {
//                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuário não encontrado");
//            }
//            return ResponseEntity.ok("Imagem salva com sucesso!");
//        } catch (IOException e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao salvar imagem");
//        }
//    }

    @PostMapping("/login")
    public ResponseEntity<Usuario> validarLogin(@RequestBody Map<String, Object> credenciais) {
        String telefone = credenciais.get("TELEFONE").toString();
        String senha = credenciais.get("SENHA").toString();
        return ResponseEntity.ok(usuarioService.validarLogin(telefone, senha));
    }

//    @GetMapping("/{id}/imagem-perfil")
//    public ResponseEntity<byte[]> getImagemPerfil(@PathVariable Long id) {
//        Usuario usuario = usuarioService.findById(id);
//        if (usuario == null || usuario.uploadProfileImage() == null) {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
//        }
//
//        String tipoImagem = imagemService.getTipoImagem(usuario.uploadProfileImage());
//        if (tipoImagem == null) {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
//        }
//
//        MediaType mediaType = MediaType.parseMediaType(tipoImagem);
//        return ResponseEntity.ok().contentType(mediaType).body(usuario.uploadProfileImage());
//    }

}