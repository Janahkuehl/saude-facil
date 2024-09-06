package com.saude_facil_back.service;

import com.saude_facil_back.model.Responsavel;
import com.saude_facil_back.model.Usuario;
import com.saude_facil_back.repository.ResponsavelRepository;
import com.saude_facil_back.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
