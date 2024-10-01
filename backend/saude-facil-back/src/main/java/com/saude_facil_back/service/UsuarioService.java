package com.saude_facil_back.service;

import com.saude_facil_back.model.Medicamento;
import com.saude_facil_back.model.Responsavel;
import com.saude_facil_back.model.Usuario;
import com.saude_facil_back.repository.ResponsavelRepository;
import com.saude_facil_back.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    UsuarioRepository usuarioRepository;

    public List<Usuario> findAll() {
        return usuarioRepository.findAll();
    }

    public Usuario findById(Integer id) {
        return usuarioRepository.findById(id).orElse(null);
    }

    public Usuario save(Usuario Usuario) {
        return usuarioRepository.save(Usuario);
    }

    public void delete(Usuario Usuario) {
        usuarioRepository.delete(Usuario);
    }

    public static void main(String[] args) {
        SpringApplication.run(UsuarioService.class, args);
    }

//    public boolean uploadProfileImage(Integer id, MultipartFile imagem) throws IOException {
//        Optional<Usuario> usuarioOptional = usuarioRepository.findById(id);
//        if (usuarioOptional.isEmpty()) {
//            return false;
//        }
//    }

    public Usuario validarLogin(String telefone, String senha){
        return usuarioRepository.validarLogin(telefone, senha);
    }
}